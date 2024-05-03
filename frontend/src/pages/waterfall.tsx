import { FC } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


interface Item {
  title: string;
  imageUrl: string;
  uploadTime: string;
  username: string;
}

const items: Item[] = [
  { 
    title: 'Item 1', 
    imageUrl: 'https://pic-image.s3.ap-southeast-2.amazonaws.com/imgs/user1/lena.png',
    uploadTime: '2024-05-01 10:00:00',
    username: 'user1',
  },
  { 
    title: 'Item 2', 
    imageUrl: 'https://pic-image.s3.ap-southeast-2.amazonaws.com/imgs/user1/lena.png',
    uploadTime: '2024-05-01 11:00:00',
    username: 'user2',
  },
  { 
    title: 'Item 3', 
    imageUrl: 'https://pic-image.s3.ap-southeast-2.amazonaws.com/imgs/user1/lena.png',
    uploadTime: '2024-05-01 12:00:00',
    username: 'user3',
  },
];

const waterfall: FC = () => {
  return (
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper style={{ padding: 20 }}>
            <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: 'auto' }} />
            <Typography variant="h6">{item.title}</Typography>
            <Typography>{item.uploadTime}</Typography>
            <Typography>{item.username}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default waterfall;
