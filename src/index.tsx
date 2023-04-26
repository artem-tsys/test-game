import ReactDOM from 'react-dom/client';
import 'src/styles/reset.scss';
import 'src/styles/index.css';
import { initApp } from "src/initApp";

function init() {
	const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
	const app = initApp()
	root.render(app)
}
init()
