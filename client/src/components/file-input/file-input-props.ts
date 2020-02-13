export type FileInputProps = {
    handleFileInputChange: (fileList: FileList) => void,
    displayText: string,
    multiple?: boolean,
    allowedExtensions?: string
}