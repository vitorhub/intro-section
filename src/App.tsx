import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import todo from './assets/images/icon-todo.svg'
import audio from './assets/images/client-audiophile.svg'
import Menu from './components/Menu'

function App() {

  return (
    <>
        <Menu/>
        <img src={reactLogo} alt="todolist" />
        <img src={viteLogo} alt="todolist" />
        <img src={todo} alt="todolist" />
        <img src={audio} alt="todolist" />
    </>
  )
}

export default App
