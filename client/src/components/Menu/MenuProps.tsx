export interface ContextPropsItem {
    id: string,
    displayText: string,
    clickHandler: (any?) => void,
    icon?: string
}

export interface ContextProps {
    id: string,
    items: ContextPropsItem[]
}

export interface MenuProps extends ContextProps {
    anchorEl: HTMLElement,
    className?: string,
    keepMounted?: boolean,
    open?: boolean,
    contextCloseHandler: () => void,
    clickHandler: (any) => void
}