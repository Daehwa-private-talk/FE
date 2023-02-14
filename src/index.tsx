import { createRoot } from 'react-dom/client';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
