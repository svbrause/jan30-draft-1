// Main entry point

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Inject environment variables
declare global {
  interface Window {
    AIRTABLE_API_KEY?: string;
    AIRTABLE_BASE_ID?: string;
    USE_BACKEND_API?: boolean;
  }
}

// Set Airtable configuration from environment variables
window.AIRTABLE_API_KEY = window.AIRTABLE_API_KEY || '';
window.AIRTABLE_BASE_ID = window.AIRTABLE_BASE_ID || 'appXblSpAMBQskgzB';

// Auto-detect: If running on localhost, use backend API; otherwise use Vercel routes
if (window.USE_BACKEND_API === undefined) {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  window.USE_BACKEND_API = isLocalhost;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
