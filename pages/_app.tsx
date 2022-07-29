import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return(
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />  
      </Layout>
    </ApolloProvider>
  ) 
}

export default MyApp
