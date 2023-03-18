import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ModalState } from './myContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ModalState>
    <App/>
  </ModalState>
)
