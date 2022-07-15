import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/app';

import '../styles/general.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
