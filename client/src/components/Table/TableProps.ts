import { ContextProps } from "../Menu/MenuProps";

export type TableData = { [key: string]: string };

export type TableProps = {
    headings: { [key: string]: string }[]
    data: TableData[]
    checkbox?: boolean
    rowClickHandler?: (any) => void
    selectAllHandler?: (any) => void
    selectedRowsIds?: string[]
    contextMenuProps?: ContextProps
    showId?: boolean;
}