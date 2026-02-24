import {useState ,useEffect} from 'react'
import data from './assets/app.json'
import './App.css'

function App() {
  const [things, setthings] = useState([])
  const url = 'https://raw.githubusercontent.com/kavtelishvilidemetre-creator/forprogectresposity/refs/heads/main/forprogect/src/assets/app.json?token=GHSAT0AAAAAADTVGFD5RB4BZEUIIBVIL6TG2M5VA3Q'
   useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setthings(data))
      .catch((err) => console.log(err))
    }, [])
  console.log(things)
  return (
    <>
      <div>
        
        {things.map(thing => (
          <div key={thing.id}>
            <h1>{thing.title}</h1>
            <p>{thing.description}</p>
            <h4>{thing.level}</h4>
          </div>
        ))}
         
      </div>
    </>
  )
}

export default App
