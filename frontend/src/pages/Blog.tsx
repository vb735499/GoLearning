import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import APIService from '../api/apiservice';

interface jsonData {
  id: string
  date: string
  title: string
  image: string
  username: string
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {

  const [imgsFile, setImgsFile] = React.useState<jsonData[]>([]);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  const handleGetHelleMsg = async () => {
    const result = await APIService._get();
    setImgsFile(imgsFile);
  }
  React.useEffect(() => {
    if (!isLoaded) {
      handleGetHelleMsg();
      setIsLoaded(true);
    }
  }, [imgsFile, isLoaded]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="PicShare" />
        <main>
          <Grid container spacing={4}>
            {imgsFile.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </Grid>
          
          <Grid container spacing={5} sx={{ mt: 3 }}>
          </Grid>
        </main>
      </Container>
      <Footer
        description="Welcome to PicShare, where you can share your pictures as you like. But you still have to pay attention to your personal privacy"
      />
    </ThemeProvider>
  );
}
