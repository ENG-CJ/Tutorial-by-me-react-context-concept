import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppContextProvider } from './Context/AppProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
)
