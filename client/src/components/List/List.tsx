import React from 'react';
import { Theme, createStyles } from '@material-ui/core/styles';
import MaterialList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/styles';
import FormField from '../Form/FormField';


const RootListItem: any = withStyles((theme: Theme) =>
    createStyles({
        button: {
            '&:hover, &.selected': {
                backgroundColor: theme.palette.primary.light
            }
        },
        // selected: {
        //     backgroundColor: `${theme.palette.primary.light} !important`
        // },
    })
)(ListItem);

const NestedListItem: any = withStyles((theme: any) => {
    return createStyles({
        root: {
            borderBottom: theme.border.light,
        },
        button: {
            '&:hover': {
                backgroundColor: theme.palette.primary.light
            }
        },
        focusVisible: {
            backgroundColor: `${theme.palette.primary.light} !important`
        },
        // selected: {
        //     backgroundColor: `${theme.palette.primary.light} !important`
        // },

    })
}
)(ListItem);

const List = ({ data, style, listItemElementCallback }) => {


    const [open, setOpen] = React.useState({});

    const handleClick = (key: string) => {
        setOpen({ ...open, [key]: !open[key] });
    };

    return (
        <MaterialList
            component="div"
            aria-labelledby="nested-list-subheader"
            style={{ ...style.root }}
        >
            {data.keys.map(key => (
                <React.Fragment key={key}>
                    <RootListItem
                        style={{ borderBottom: !open[key] ? '1px solid #e0e0e0' : '' }}
                        button
                        onClick={() => handleClick(key)}
                    >
                        <ListItemText primary={data.keyValueMap[key]} />
                        {open[key] ? <ExpandLess /> : <ExpandMore />}
                    </RootListItem>
                    <Collapse in={open[key]} timeout="auto" unmountOnExit>
                        <MaterialList component="div" disablePadding>
                            <NestedListItem button>
                                {listItemElementCallback(key)}
                            </NestedListItem>
                        </MaterialList>
                    </Collapse>
                </React.Fragment>
            ))}
        </MaterialList>
    );
}

export default List;