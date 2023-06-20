
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [motos,setMotos]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/motos/all')
    .then( data => data.json())
    .then( json => setMotos(json))
  },[])

  return (
    <>
    <pre>
      <code>
        {JSON.stringify(motos,null,3)}
      </code>
      </pre>
      
    </>
  )
}

export default App
