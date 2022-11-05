import '../styles/globals.css';
import Layout from '../components/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from '../lib/context';
import { myBreakpoints } from '../styles/breakpoints';

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider theme={myBreakpoints}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp
