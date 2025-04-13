import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        vite with Tailwind
      </h1>
      <Card username="Saif Iqbal" post="SDE 1, Qatar" />
      <Card username="Imran" post="Dr, USA" />
      <Card />
    </>
  );
}

export default App
