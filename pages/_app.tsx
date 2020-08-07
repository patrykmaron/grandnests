import { AppProps } from "next/app";
import Theme from "../styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=auto");
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=auto");
      `}</style>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
