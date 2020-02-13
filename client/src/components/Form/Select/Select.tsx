import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MUISelect from '@material-ui/core/Select';
import MenuItem from '../../MenuItem/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            width: '100%',
        }
    })
);

const Select = (props): JSX.Element => {

    const {
        value,
        items,
        inputLabel,
        name,
        id,
        required,
        changeHandler,
        onCloseHandler,
        multiple
    } = props;

    const classes = useStyles({});
    const inputLabelRef = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    const [val, setVal] = useState(multiple ? [] : '');

    useEffect(() => {
        setLabelWidth(inputLabelRef.current!.offsetWidth);
    }, []);

    useEffect(() => {
        setVal(value || (multiple ? [] : ''));
    }, [value])

    const handleChange = ({ target }) => {
        setVal(target.value);
        changeHandler && changeHandler(target.value)
    }

    const getSelItemsDisplText = (selectedItems: string[]): string[] => {
        return items
            .filter((item: any) => selectedItems.includes(item.value))
            .map(item => item.displayText);
    }

    return (
        <FormControl variant="outlined" className={classes.formControl}>

            <InputLabel ref={inputLabelRef} htmlFor={id}>
                {inputLabel}
            </InputLabel>

            <MUISelect
                value={val}
                onChange={handleChange}
                labelWidth={labelWidth}
                inputProps={{ name, id, }}
                multiple={multiple}
                renderValue={(selectedItems: string[]) => getSelItemsDisplText(selectedItems).join(', ')}
                onClose={() => onCloseHandler && onCloseHandler()}
            >
                {!required && <MenuItem value="">
                    <em>None</em>
                </MenuItem>}

                {items && items.map(item => (
                    <MenuItem
                        key={item.value}
                        value={item.value}
                    >
                        {multiple && <Checkbox checked={val.indexOf(item.value) > -1} />}
                        {item.displayText}
                    </MenuItem>
                ))}
            </MUISelect>

        </FormControl>
    )
}

export default Select;