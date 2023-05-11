import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './index.css';
import ThemeProvider from './theme/ThemeProvider';
import { UsersProvider } from './contexts/users-context';

ReactDOM.createRoot(document.getElementById('root')).render(
    <UsersProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UsersProvider>
);
