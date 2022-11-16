import React from 'react';
import { IconButton, Slider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { BaseProps, Category } from "../modules/common/types";

interface CategoryWeightsProps extends BaseProps {
  categories: Category[]
}

const calculateCategoriesSliderPositions = (categories: Category[]) => categories.reduce((acc: number[], curr, i) => {
  if (i !== categories.length - 1) {
    if (i === 0) {
      acc.push(curr.weight)
    } else {
      acc.push(categories[i - 1].weight + curr.weight)
    }
  }
  return acc
}, [])

export default function CategoryWeights({ categories }: CategoryWeightsProps) {
  return <div style={{ display: 'flex' }}>
    <Slider
      track={false}
      aria-labelledby="track-inverted-range-slider"
      defaultValue={calculateCategoriesSliderPositions(categories)}
      size='small'
      disableSwap
    />

    <IconButton color="primary" aria-label="delete" size="small">
      <AddIcon fontSize="inherit" />
    </IconButton>
  </div>
}
