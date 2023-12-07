import React from 'react';
import { Chip, Stack, Typography, FormControl, OutlinedInput } from '@mui/material';
import MainLayout from './modules/common/MainLayout';
import Sidebar from './modules/common/Sidebar';
import Content from './modules/common/Content';
import CategoryWeights from './components/CategoryWeights';
import TransactionsTable from './components/TransactionsTable';
import { categories, transactions } from './tests/testData';
import { parseCsvFile } from './helpers/csvHelper';
import * as db from './database/index'


function BudgetPal() {
  //db.transactionsDb.bulkDocs([
  //  {
  //    _id: new Date().toJSON(),
  //    test_field1: 'hello there'
  //  },
  //  {
  //    _id: new Date().toJSON(),
  //    test_field1: 'hello again'
  //  }
  //])

  db.transactionsDb.allDocs({ include_docs: true }).then(docs => console.log(docs))

  return <MainLayout>

    <Sidebar>
      <Typography variant="h4">
        Sidebar
      </Typography>

      <FormControl fullWidth>
        <OutlinedInput placeholder="Please enter text" size='small' />
      </FormControl>
      <h3>Available Tags</h3>
      <Stack direction="row" spacing={1}>
        <Chip label="Small" size="small" clickable style={{ backgroundColor: 'red', color: 'white' }} />
      </Stack>

      <h3>Applied Tags</h3>
      <Stack direction="row" spacing={1}>
        <Chip label="Small" size="small" clickable style={{ backgroundColor: 'red', color: 'white' }} />
      </Stack>
    </Sidebar>

    <Content>
      <h2>Content</h2>
      <CategoryWeights categories={categories} />
      <Typography variant="h4">
        Content
      </Typography>

      <input
        onChange={(e) => {
          const files = e.target.files || [];
          if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
              const file = files[i];
              console.log(file)
              parseCsvFile(file)
                .then(parsedFile => console.log(parsedFile))
                .catch(e => console.error(e))
            }
          }
        }}
        accept='.csv'
        id='contained-button-file'
        multiple
        type='file'
      />

      <TransactionsTable transactions={transactions} />
    </Content>

  </MainLayout>
}

export default BudgetPal;