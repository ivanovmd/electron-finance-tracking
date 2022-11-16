import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { BaseProps } from "./types";

export default function Sidebar({ children }: BaseProps) {
    return <Grid sm={12} md={4} lg={3}>
        {children}
    </Grid>
}