import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ModalProvider } from '../components/ModalContext';

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}

export default MyApp;
