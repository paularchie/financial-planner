import { createMuiTheme } from '@material-ui/core';

export const themes = {
    default_1: {
        ...createMuiTheme({
            palette: {
                primary: {
                    main: '#2c5d85',
                    dark: '#205882',
                    light: '#e3f2fd',
                    contrastText: 'white',
                },
                secondary: {
                    main: '#d4df97',
                    dark: '#949c69',
                    light: '#dce5ab'
                }
            },
        }),
        notification: {
            success: '#1b5e20'
        },
        border: {
            light: '#e0e0e0'
        },
        selected: {
            light: '#e3f2fd'
        }
    },
    default_2: {
        ...createMuiTheme({
            palette: {
                primary: {
                    main: '#d32f2f',
                    dark: '#b71c1c',
                    light: '#ffcdd2'
                },
            },
        }),
        notification: {
            success: '#1b5e20'
        },
        border: {
            light: '#e0e0e0'
        },
        selected: {
            light: '#ffcdd2'
        }
    }
}