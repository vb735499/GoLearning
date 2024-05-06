import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import UploadForm from './UploadForm';
import Typography from '@mui/material/Typography';

export default function UploadCard() {

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

  return (
    <Card sx={{ maxWidth: 600 }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            UploadForm
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <UploadForm></UploadForm>
            </Typography>
        </CardContent>
    </Card>
  );
}
