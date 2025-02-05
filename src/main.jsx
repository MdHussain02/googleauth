import { createRoot } from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx';
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </RecoilRoot>
);
