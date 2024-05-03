import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="a"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          href='/'
          sx={{ flex: 1 , textDecoration:'none'}}
        >
          {title}
        </Typography>
        <Button variant="contained" size="small">
          Sign in
        </Button>

        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}
