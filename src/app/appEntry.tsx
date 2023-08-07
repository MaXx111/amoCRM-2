import React from 'react'
import ReactDOM from 'react-dom/client'

import './App.css'
import { MainPage } from '../pages/main/mainPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
