import { Category, Transaction } from "../modules/common/types";

export const transactions: Transaction[] = [
  {
    id: 'qws2',
    amount: 12345,
    description: 'a fake transaction',
    origin: 'TD Bank',
    createdAt: Date.now()
  },
  {
    id: 'qwsascasd',
    amount: 1212455.234,
    description: 'a fake transactionasd asd asd asd sadasd',
    origin: 'TD Bank',
    createdAt: Date.now()
  }
]

export const categories: Category[] = [
  {
    id: 'asdaf23',
    name: 'Amazon',
    color: 'orange',
    weight: 40
  },
  {
    id: 'asdaf23d',
    name: 'Groceries',
    color: 'green',
    weight: 35
  },
  {
    id: 'asdaf23a',
    name: 'Groceries',
    color: 'yellow',
    weight: 25
  }
]