import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

export default function UploadForm() {
    const [formData, setFormData] = React.useState({
        username: '',
        // password: '',
        upload: FileList, // 用於文件上傳的字段
    });
    
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        // 在這裡發送表單數據到後端
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files == null){
            return ;
        }
        const file = event.target.files 
        // setFormData({ ...formData, upload: file });
    };
    


  return (
        <form 
            action="/api/upload" 
            method="POST" 
            encType="multipart/form-data" 
            onSubmit={handleSubmit}
        >
            <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                請選擇上傳的檔案(可拖拉檔案至此，支援jpg,jpeg,png,gif格式):
                <VisuallyHiddenInput type="file" required multiple={true} name='upload[]' draggable={true} />
            </Button>
            <TextField
                type="text"
                name="username"
                label="Username"
                value={formData.username}
                onChange={handleChange}
                fullWidth
            />
            <Stack spacing={2} direction="row">
                <Button type='submit' variant="text" endIcon={<SendIcon />}>送出</Button>
            </Stack>
        </form>
  );
}
