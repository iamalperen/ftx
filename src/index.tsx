import React from 'react'
import ReactDOM from 'react-dom'
import { Normalize } from 'styled-normalize'
import { Header } from './components'

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <Header />
    <div>FTX NFT</div>
  </React.StrictMode>,
  document.getElementById('root'),
)
