import React from 'react'
import ReactDOM from 'react-dom/client'
import {GlobalStyle} from './Styles/global'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Router/index'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
)
