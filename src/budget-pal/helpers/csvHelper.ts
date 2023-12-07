
import Papa, { ParseConfig, ParseResult } from 'papaparse'

export const parseCsvFile = (file: File, options: ParseConfig = {}): Promise<ParseResult<any>> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      ...options,
      complete: (results) => resolve(results),
      error: (error) => reject(error)
    })
  })
}