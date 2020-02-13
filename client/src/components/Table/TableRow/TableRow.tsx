import React from 'react';
import { withStyles, createStyles } from '@material-ui/styles';
import { Theme, TableRow } from '@material-ui/core';

export default withStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: 'pointer',
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
      '&.selected, &.selected:hover': {
        backgroundColor: theme.palette.primary.light
      },
    }
  })
)(TableRow);