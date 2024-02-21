import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>
        {count}
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} >
          +
        </button>
        <button onClick={() => setCount((count) => (count > 0) ? count - 1 : 0)}>
          -
        </button>
      </div>
    </>
  )
}
export default App