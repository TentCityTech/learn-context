import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ModalProvider } from '../context/modal/ModalContext';
import ModalManager from '../components/modals/ModalManager';

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
      <ModalManager />
    </ModalProvider>
  );
}

export default MyApp;
