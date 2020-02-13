import React from 'react';
import { TableCell, Theme } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';

const StyledTableCell = withStyles((theme: Theme) =>{

    return createStyles({
        root: {
            fontSize: 14,
        },
        head: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
        },
    })}
)(TableCell);


export default StyledTableCell;