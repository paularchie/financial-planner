import React, { useRef, useEffect } from 'react';
import { FileInputProps } from './file-input-props';
import Button from '../button/button';

const FileInput = ({ handleFileInputChange, displayText, multiple, allowedExtensions }: FileInputProps): JSX.Element => {

    const inputRef = useRef<HTMLInputElement>();

    return (
        <>
            <input
                type="file"
                ref={inputRef}
                onChange={(e) => handleFileInputChange(e.target.files)}
                multiple={multiple}
                accept={allowedExtensions}
                hidden
            />

            <Button
                clickHandler={() => inputRef.current.click()}
            >
                <i className="material-icons">cloud_upload</i>
                {displayText}
            </Button>
        </>
    )
}

export default FileInput;