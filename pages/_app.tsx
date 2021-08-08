import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Theme } from "./../src/themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
