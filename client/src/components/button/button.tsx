import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import './Button.scss';
import clsx from 'clsx';
import { ButtonProps } from './button-props.type';
import useStyles from '../../hooks/styles.hook';

const Button = (props: ButtonProps): JSX.Element => {

    const classes = useStyles(props.style);

    return (
        <MaterialButton
            variant={props.variant || "contained"}
            color={props.color}
            type={props.type}
            disabled={props.disabled}
            onClick={props.clickHandler}
            className={clsx("button", classes && classes.root)}
            {...props.attributes}
        >
            {props.children}
        </MaterialButton>
    )
}

export default Button;
