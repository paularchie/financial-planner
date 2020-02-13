import React from 'react';
import { TableHead, TableRow, Checkbox, TableSortLabel, withStyles, Theme, createStyles, makeStyles } from "@material-ui/core";
import StyledTableCell from '../TableCell/TableCell';
import { useTheme } from '@material-ui/styles';

const StyledTableSortLabel = withStyles((theme: Theme) => {
    const color = `${theme.palette.primary.light} !important`;
    return createStyles({
        root: { '&:hover': { color } },
        active: { color },
        icon: { color }
    })
})(TableSortLabel)

const EnhancedTableHead = (props) => {
    const {
        headings,
        checkbox,
        selectAllHandler,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
        showId
    } = props;

    const theme: any = useTheme();

    const createSortHandler = (property: any) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    const isChecked = !!rowCount && numSelected === rowCount;

    return (
        <TableHead>
            <TableRow>
                {
                    checkbox && <StyledTableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={isChecked}
                            onChange={selectAllHandler}
                            inputProps={{ 'aria-label': 'select all desserts' }}
                            style={{ color: isChecked ? theme.palette.primary.light : 'white' }}
                        />

                    </StyledTableCell>
                }

                {headings.map((headingItem) => {
                    const columnKey = Object.keys(headingItem)[0];
                    return (
                        <React.Fragment key={columnKey}>
                            {!showId && columnKey === 'id' ? null : (
                                <StyledTableCell
                                    sortDirection={orderBy === columnKey ? order : false}
                                >
                                    <StyledTableSortLabel
                                        active={orderBy === columnKey}
                                        direction={order}
                                        onClick={createSortHandler(columnKey)}
                                    >
                                        {headingItem[columnKey]}
                                        {orderBy === columnKey ? (
                                            <span className="sr-only">
                                                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </span>
                                        ) : null}
                                    </StyledTableSortLabel>
                                </StyledTableCell>
                            )}
                        </React.Fragment>
                    )
                })}
            </TableRow>
        </TableHead>
    );
}

export default EnhancedTableHead;