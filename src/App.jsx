import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BotaoContador from './botaoContador'
import ListaDeItens from './ListaDeItens'

function App() {
  
  return (
    <div>
      <h1>Pietro</h1>
      <BotaoContador />
      <hr />
      <ListaDeItens />
    </div>
  )
}

export default App