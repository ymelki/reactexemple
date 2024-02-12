import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './Test.jsx'
import NotFound from './NotFound.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

   <App />
  </BrowserRouter>,
)
