import type { AppProps } from "next/app";
import Layout from './component/layout'
import { QueryClient, QueryClientProvider } from 'react-query';
import React from "react";
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </QueryClientProvider>
  </React.StrictMode>
  )
}
