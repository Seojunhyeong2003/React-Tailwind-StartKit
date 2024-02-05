import { useState } from 'react'
import NewComponents from './components/NewComponents'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count+1);
  }

  const decrease = () => {
    setCount(count-1);
  }

  return (
    <div className='h-screen w-screen bg-[#242424] flex justify-center items-center'>
        <NewComponents.StartComponents />
    </div>
  )
}

export default App
