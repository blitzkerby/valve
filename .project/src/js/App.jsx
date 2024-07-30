import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../css/App.css'


const pages = [
  {id: 1,
    title: '✨ Step',
    file: 'step.html',
    description: "Basic app dmonstrating states."
  },
  {id: 2,
    title: 'Count',
    file: 'count.html'
  },
  {id: 3,
    title: 'Far Away',
    file: 'far_away.html'
  },
]



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {pages.map(page => Page(page))}
    </>
  )
}



function Page(page){
  return (
    <div className='card'>
      <h1><a href={`../${page.file}`}>{page.title}</a></h1>
      <p>{page.description}</p>
    </div>
  )
}

export default App
