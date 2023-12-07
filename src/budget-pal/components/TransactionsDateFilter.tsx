import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { TextField } from '@mui/material';
import { BaseProps } from '../modules/common/types';


interface TransactionsDateFilterProps extends BaseProps {
  onStartDateChange(date: Dayjs | null): void,
  onEndDateChange(date: Dayjs | null): void
}


export default function TransactionsDateFilter({ onStartDateChange, onEndDateChange }: TransactionsDateFilterProps) {
  const [startDate, setStartDate] = useState<Dayjs | null>(
    dayjs(new Date()),
  );

  const [endtDate, setEndDate] = useState<Dayjs | null>(
    dayjs(new Date()).add(7, 'day'),
  );

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
  };

  useEffect(() => {
    onStartDateChange(startDate)
  }, [startDate, onStartDateChange])

  useEffect(() => {
    onEndDateChange(endtDate)
  }, [endtDate, onEndDateChange])


  return <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div>
      <span style={{ marginRight: '12px' }}>
        <DesktopDatePicker
          label="Start Date"
          inputFormat="MM/DD/YYYY"
          value={startDate}
          onChange={handleStartDateChange}
          renderInput={(params) => <TextField size='small' {...params} />}
        />
      </span>
      <span>
        <DesktopDatePicker
          label="End Date"
          inputFormat="MM/DD/YYYY"
          minDate={startDate || undefined}
          value={endtDate}
          onChange={handleEndDateChange}
          disableFuture
          renderInput={(params) => <TextField size='small' {...params} />}
        />
      </span>
    </div>
  </LocalizationProvider>
}