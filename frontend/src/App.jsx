import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

  useState(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data)
    })
    .catch((error) =>{
      console.log(error)

    })
  })

  return (
    <>
      <h1>Connect backend from frontend</h1>
      <p>No. of Jokes : {jokes.length}</p>

      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
      
    </>
  )
}

export default App
