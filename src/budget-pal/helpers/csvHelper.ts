
import { Options, parse } from 'csv-parse'
import { ParsedCsvFile } from '../modules/common/types'

export const parseCsvFile = (file: File, options: Options, callback: (parsedFile: ParsedCsvFile) => unknown): Promise<string[][]> => {
  const parser = parse(options)
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    try {
      let result: string[][]

      reader.readAsText(file)

      reader.onload = () => {
        parser.write(reader.result)
        parser.end()
      }

      parser.on('readable', () => {
        result.push(parser.read())
      })

      parser.on('end', () => {
        const [columns, ...rows] = result
        const parsedFile = {
          name: file.name,
          columns: columns.sort(),
          rows,
        }
        callback && callback(parsedFile)
        resolve(result)
      })
    } catch (e) {
      reject(e)
    }
  })
}