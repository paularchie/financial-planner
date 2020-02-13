import React from 'react';
import MaterialTablePagination from '@material-ui/core/TablePagination';

const TablePagination = ({ rowCount, rowsPerPage, page, changePageHandler, changeRowsPerPageHandler }) => {
    return (
        <MaterialTablePagination
            rowsPerPageOptions={[20, 50, 100]}
            component="div"
            count={rowCount}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
                'aria-label': 'previous page',
            }}
            nextIconButtonProps={{
                'aria-label': 'next page',
            }}
            onChangePage={changePageHandler}
            onChangeRowsPerPage={changeRowsPerPageHandler}
        />
    )
}

export default TablePagination