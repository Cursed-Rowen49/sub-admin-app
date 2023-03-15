import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '@/components/AppContext';
import React, { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState({
    theme: 'light',
    color: 'rgb(17,24,39)',
    bgColor: '#fff',
  });

  return (
    <AppContext.Provider value={{ mode, setMode }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
