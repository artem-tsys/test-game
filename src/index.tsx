import ReactDOM from 'react-dom/client';
import './styles/reset.scss';
import './styles/fonts.css';
import './styles/index.css';
import {initApp} from './initApp';

function init() {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  const app = initApp();
  root.render(app);
}
init();
