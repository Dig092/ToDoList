import { createRoot } from 'react-dom'; // Import createRoot instead of ReactDOM
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import App from './App';

// Use createRoot to render your app
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
