import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BotaoContador from './botaoContador'
import ListaDeItens from './ListaDeItens'
import MostrarText from './MostrarTexto'
import Saudao from './Saudacao'
import Tabuada from './Tabuada'
import EstiloDinamico from './EstiloDinamico'

function App() {
  
  return (
    <div>
      <h1>Pietro</h1>
      <BotaoContador />
      <hr />
      <ListaDeItens />
      <MostrarText />
      <hr />
      <Saudao nome="Enzo" mensagem="Ola meu parceiro"/>
      <hr />
      <Tabuada />
      <hr />
      <EstiloDinamico />
    </div>
  )
}

export default App