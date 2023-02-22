import { GlobalStyles } from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
