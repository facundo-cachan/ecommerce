import { AppProps } from 'next/app'
import Head from 'next/head';
import { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Auth, Cart } from '../context';
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo'
import { App } from '../components';
import theme from '../lib/theme';


export default function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <ApolloProvider client={apolloClient}>
          <Auth.AuthProvider>
            <Cart.CartShopProvider>
              <App.Layout>
                <Component {...pageProps} />
              </App.Layout>
            </Cart.CartShopProvider>
          </Auth.AuthProvider>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}
