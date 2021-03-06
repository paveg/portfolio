import { AppProps } from 'next/app';
import reset from 'styled-reset';
import React from 'react';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { MuiThemeProvider } from '@material-ui/core';
import Color from '../lib/color';

type GlobalStyleProps = {
  theme: {
    backgroundColor: string;
  };
};

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
  },
});

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${reset}
  // Write your global styles.
  html {
    height: 100%;
    width: 100%
  }
  body {
    margin: 0;
    height: 100%;
    width: 100%
    font-size: 1rem;
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.5;
    background: ${(props) => props.theme.backgroundColor};
  }
  div#__next, div#__next > div {
    height: 100%;
  }
  #next, #next > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    const jss = document.querySelector('#jss-server-side');
    if (jss && jss.parentNode) {
      jss.parentNode.removeChild(jss);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width,initial-scale=1.0,viewport-fit=cover"
        />
        <meta name="Description" content="Ryota Ikezawa's portfolio" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
          rel="preload"
          as="style"
        />
        <title key="title">portfolio</title>
      </Head>

      <ThemeProvider theme={{ backgroundColor: Color.white }}>
        <MuiThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
