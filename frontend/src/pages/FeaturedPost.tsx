import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem } from '@mui/material/';
import { red } from '@mui/material/colors';
import moment from 'moment';

interface FeaturedPostProps {
  post: {
    date: string;
    title: string;
    image: string;
    username: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    fetch(post.image, { method: 'GET'})
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      var url = window.URL.createObjectURL(blob); // create url from blob
      var fileLink = document.createElement('a'); // create link for file
      fileLink.href = url;
      console.log(blob.type.split('/')[1]);
      fileLink.download = moment().format('YYYY-MM-DD_HH-mm-ss') + '.' + blob.type.split('/')[1]; // download filename
      document.body.appendChild(fileLink); // append file link to download
      fileLink.click();
      fileLink.remove(); // remove file link after click
    })
    .catch((error:any) => {
      console.log(error)
    }) 
  };

  return (
    <Grid item xs={12} md={4} key={post.date}>
      <Card sx={{ }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {post.username[0]}
            </Avatar>
          }
          action={
            <div>
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} >Download</MenuItem>
              </Menu>
            </div>
          }
          title={post.title.split('/').pop()}
          subheader={post.date}
        />
        <CardMedia
          component="img"
          sx={{ width: '100%', height: 'auto', display: { xs: 'none', sm: 'block' } }}
          image={post.image}
        />

      </Card>
    </Grid>
  );
}
