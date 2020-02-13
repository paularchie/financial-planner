import React from 'react';
import { MenuProps, ContextPropsItem } from './MenuProps';
import MaterialMenu from '@material-ui/core/Menu';
import MenuItem from '../MenuItem/MenuItem';

const Menu = (props: MenuProps): JSX.Element => {

    const {
        id,
        items,
        className,
        keepMounted,
        open,
        anchorEl,
        contextCloseHandler,
        clickHandler
    } = props;

    const handleClick = (item: ContextPropsItem): void => {
        if (clickHandler) {
            clickHandler(item.clickHandler);
        } else {
            item.clickHandler();
        }
    }

    return (
        <MaterialMenu
            id={id}
            className={className}
            anchorEl={anchorEl}
            keepMounted={keepMounted}
            open={open}
            onClose={contextCloseHandler}
        >
            {items && items.map(item => (
                <MenuItem key={item.id} onClick={() => handleClick(item)}>
                    {item.icon && <i className="material-icons">{item.icon}</i>}
                    {item.displayText}
                </MenuItem>
            ))}
        </MaterialMenu>
    );
}

export default Menu;