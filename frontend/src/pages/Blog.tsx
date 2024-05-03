import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';

const featuredPosts = [
  {
    date: 'Nov 12',
    title: 'ada1',
    image: 'https://source.unsplash.com/random?wallpapers',
    username: 'R'
  },
  {
    date: 'Nov 11',
    title: 'ada',
    image: 'https://source.unsplash.com/random?wallpapers',
    username: 'J',
  },
];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="PicShare" />
        <main>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          </Grid>
        </main>
      </Container>
      <Footer
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
