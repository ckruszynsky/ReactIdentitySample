import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import {Routes } from './routes'
import AuthProvider from './auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <AuthProvider>
            <Routes />
        </AuthProvider>
  </React.StrictMode>,
)
