import { FormControl, OutlinedInput } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import React, { Fragment } from 'react';
import { BaseProps, Transaction } from '../modules/common/types';
import TransactionsCommonActions from './TransactionsCommonActions';
import TransactionsDateFilter from './TransactionsDateFilter';

interface TransactionsTableProps extends BaseProps {
  transactions: Transaction[]
}


const columns: GridColDef[] = [
  { field: 'createdAt', headerName: 'Created At', flex: 1, minWidth: 150, valueGetter: (params: GridValueGetterParams) => dayjs(params.row.createdAt).format('MM/DD/YYYY') },
  { field: 'amount', headerName: 'Amount', type: 'number', flex: 1, minWidth: 150, valueGetter: (params: GridValueGetterParams) => `$${params.row.amount}` },
  {
    field: 'description',
    headerName: 'Description',
    description: 'Description of the transaction. You can edit this.',
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
];


export default function TransactionsTable({ transactions }: TransactionsTableProps) {
  return <Fragment>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <TransactionsDateFilter onEndDateChange={console.log} onStartDateChange={console.log} />

      <TransactionsCommonActions selectedRows={['fake']} onAddCategoriesClick={console.log} onAddTagsClick={console.log} onDeleteClick={console.log} />
    </div>

    <div style={{ paddingBottom: '16px' }}>
      <FormControl fullWidth>
        <OutlinedInput placeholder="Please enter text" size='small' />
      </FormControl>
    </div>

    <DataGrid
      rows={transactions}
      loading={!transactions || transactions.length === 0}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      autoHeight
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  </Fragment>
}