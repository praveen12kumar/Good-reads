
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
    
    <Provider store={store}>
        <Router>
            <App />
            <Toaster/>
        </Router>
    </Provider>

)
