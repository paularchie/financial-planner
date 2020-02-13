import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LoaderProps } from './LoaderProps';

const Loader = ({style}: LoaderProps): JSX.Element => {
    return <CircularProgress style={style} />
}

export default Loader;