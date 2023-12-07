import { ReactNode } from "react";

export interface BaseProps {
    children?: ReactNode
}

export interface Tag {
    id: string
    name: string
}

export interface Category {
    id: string
    name: string
    color: string
    desription?: string,
    weight: number
}

export interface Transaction {
    id: string
    amount: number
    origin: string // Financial Institution
    type?: 1 | -1 // addition or subtraction of balance, check if I really need this
    description: string
    postedAt?: string
    createdAt: number
    tags?: Tag[]
    categories?: Category[]
}

export interface ParsedCsvFile {
    name: string
    columns: string[]
    rows: string[][]
}