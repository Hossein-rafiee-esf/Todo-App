import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Todo } from './todo-list-/Todo'
import { AddAppProvider } from './todo-list-/newContaxt'  // توجه به حروف بزرگ

function App() {
  return (
    <AddAppProvider>  {/* توجه به حروف بزرگ */}
      <div>
        <Todo />
      </div>
    </AddAppProvider>
  )
}

export default App