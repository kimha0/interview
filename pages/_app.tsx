import '../styles/globals.scss';
import type { AppProps } from 'next/app';

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default App;
