import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let name: string = "EJ B. Besana";
  let age: number = 21;

  return (
    <>
      <h1 className="font-mono font-bold text-2xl bg-clip-text text-transparent bg-linear-to-b from-blue-600 via-sky-500 to-purple-500">Student Information</h1>
      <p className="text-lg font-semibold text-gray-700 mb-2">Name: {name}</p>
      <p className="text-lg font-semibold text-gray-700 mb-2">Age: {age}</p>
    </>
  )
}

export default App