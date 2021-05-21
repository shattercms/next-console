import { FC } from 'react';
import { AppProps } from 'next/app';
import 'normalize.css';
import '~/styles/app.scss';
import Sidebar from '~/components/Sidebar/Sidebar';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
};
export default App;
