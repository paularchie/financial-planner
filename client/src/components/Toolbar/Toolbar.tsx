import React from 'react';
import clsx from 'clsx';
import './Toolbar.scss';
import { withStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';


const Toolbar = ((props: any) => {
    const { highlight, className, children, classes } = props;
    return (
        <div
            className={
                clsx(
                    'toolbar',
                    {
                        'highlight': highlight,
                        [className]: !!className
                    },
                    classes.root
                )}
        >
            {children}
        </div>
    );
});

export default withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&.highlight': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.dark
            }
        }
    }))(Toolbar);