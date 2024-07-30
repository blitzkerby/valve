import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialItems = [
  {id : 1,
    description: "Passports",
    quantity: 2,
    packed: false},
  
  {id : 2,
    description: "Socks",
    quantity: 12,
    packed: false},
  
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo() {
  return (
    <h1>🏝️ Far Away 🧳</h1>
  )
}

function Form() {
  return (
    <div className='add-form'>
      <h3>What do you need for your trip? 🥰</h3>
    </div>
  )
}

function Item({item}){
  return (
    <>
      <li>test</li>
    </>
  )
}

function PackingList() {
  return (
    <ul className='list'>
      {initialItems.map( (item) => {
        console.log(item)
        Item(item)
      })}
    </ul>
  )
}

function Stats() {
  return (
    <footer>
      <em>🧳 You have nig items on your list, and you already packed X (X%)</em>
    </footer>
  )
}

export default App
