import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';

import '@formatjs/intl-datetimeformat/polyfill-force.js';
import '@formatjs/intl-datetimeformat/locale-data/kk';
import '@formatjs/intl-datetimeformat/locale-data/ru';
import '@formatjs/intl-datetimeformat/locale-data/en';
import '@formatjs/intl-datetimeformat/add-all-tz';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
