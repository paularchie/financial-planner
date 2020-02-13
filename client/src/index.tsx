import React from "react";
import ReactDOM from 'react-dom';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import { themes } from "./state/themes";
import ThemeProvider from '@material-ui/styles/ThemeProvider';

const App = () => {
    return (
        <ThemeProvider theme={themes['default_1']}>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </ThemeProvider>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
