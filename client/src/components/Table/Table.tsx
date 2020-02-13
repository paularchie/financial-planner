import React, { useState, ReactText } from 'react';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import './Table.scss'
import clsx from 'clsx';
import EnhancedTableHead from './TableHead/TableHead';
import StyledTableRow from './TableRow/TableRow';
import { Order as SortOrder, stableSort, getSorting } from './Table-util';
import TablePagination from './TablePagination/TablePagination';
import { TableProps, TableData } from './TableProps';
import Menu from '../Menu/Menu';

const Table = (props: TableProps): JSX.Element => {
  const {
    headings,
    data,
    checkbox,
    rowClickHandler,
    selectAllHandler,
    // TODO: consider handling this piece of state in this component
    selectedRowsIds = [],
    contextMenuProps,
    showId
  } = props;


  // pagination state
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(20);
  // sorting state
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [orderBy, setOrderBy] = useState<any>();
  // context menu state
  const [contextData, setContextData] = useState<TableData>(null);
  const [contextAnchorEl, setContextAnchorEl] = useState<null | HTMLElement>(null);

  const [rowDensePadding, setRowDensePadding] = useState<boolean>(false);


  const handleChangeRowsPerPage = (event): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (_, newPage: number): void => {
    setPage(newPage);
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: any): void => {
    const isDesc = orderBy === property && sortOrder === 'desc';
    setSortOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleContextMenu = (event, rowData): void => {
    event.preventDefault();
    setContextAnchorEl(event.currentTarget);
    setContextData(rowData)
  }

  const handleContextItemClick = (clickHandler: (data: { [key: string]: string }) => void): void => {
    handleContextClose();
    clickHandler(contextData);
    setContextData(null);
  }

  const handleContextClose = (): void => {
    setContextAnchorEl(null);
  };

  const handleChangeRowPadding = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowDensePadding(event.target.checked);
  };

  const isRowSelected = (id: string): boolean => selectedRowsIds.indexOf(id) > -1;


  return (
    <>
      <div className="table-container">
        <MaterialTable
          className="table"
          size={rowDensePadding ? 'small' : 'medium'
          }>

          <EnhancedTableHead
            order={sortOrder}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            selectAllHandler={selectAllHandler}
            headings={headings}
            checkbox={checkbox}
            numSelected={selectedRowsIds.length}
            rowCount={data.length}
          />

          <TableBody>
            {stableSort(data, getSorting(sortOrder, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((rowData, index) => (
              <StyledTableRow
                hover={true}
                style={{ height: (rowDensePadding ? 33 : 53) }}
                className={clsx({ 'selected': isRowSelected(rowData.id as string) })}
                key={rowData.id}
                onClick={() => rowClickHandler(rowData)}

              >
                {checkbox && <TableCell padding="checkbox">
                  <Checkbox
                    checked={isRowSelected(rowData.id as string)}
                    inputProps={{ 'aria-labelledby': 'label id' }}
                    color="primary"
                  />
                </TableCell>
                }

                {Object.keys(rowData).map(prop => (
                  <React.Fragment key={prop}>
                    {!showId && prop === 'id' ? null :
                      <TableCell onContextMenu={(e) => handleContextMenu(e, rowData)}>
                        {rowData[prop]}
                      </TableCell>
                    }
                  </React.Fragment>))}

              </StyledTableRow>

            ))}
          </TableBody>
        </MaterialTable>
      </div>

      <TablePagination
        rowCount={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        changePageHandler={handleChangePage}
        changeRowsPerPageHandler={handleChangeRowsPerPage}
      />

      {/* <FormControlLabel
        control={<Switch checked={rowDensePadding} onChange={handleChangeRowPadding} />}
        label="Show more"
        style={{ marginLeft: '0.3em' }}
      /> */}

      {contextMenuProps &&
        <Menu
          id={contextMenuProps.id}
          items={contextMenuProps.items}
          className="menu"
          anchorEl={contextAnchorEl}
          open={!!contextAnchorEl}
          keepMounted
          contextCloseHandler={handleContextClose}
          clickHandler={handleContextItemClick}
        />}

    </>
  )
}

export default Table;