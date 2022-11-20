import React from 'react';
import { Box, Button, ButtonGroup } from "@mui/material";
import { BaseProps } from "../modules/common/types";

interface TransactionsCommonActionsProps extends BaseProps {
  onDeleteClick(): void
  onAddTagsClick(): void
  onAddCategoriesClick(): void
  selectedRows: unknown[]
}

export default function TransactionsCommonActions({
  onAddCategoriesClick,
  onAddTagsClick,
  onDeleteClick,
  selectedRows
}: TransactionsCommonActionsProps) {
  return <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    padding: '16px 0'
  }}>
    <ButtonGroup size="small">
      <Button onClick={onAddCategoriesClick} sx={{ padding: '4px 16px' }} disabled={!selectedRows.length}>Add Categories</Button>
      <Button onClick={onAddTagsClick} sx={{ padding: '4px 16px' }} disabled={!selectedRows.length}>Add Tags</Button>
      <Button onClick={onDeleteClick} sx={{ padding: '4px 16px' }} disabled={!selectedRows.length}>Delete</Button>
    </ButtonGroup>
  </Box>
}