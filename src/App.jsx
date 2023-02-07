import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BookForm from './components/BookForm'
import Books from './components/Books'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BookForm/>
      <Books/>
    </div>
  )
}

export default App
