import {useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [things, setthings] = useState([])
  const url = 'https://raw.githubusercontent.com/kavtelishvilidemetre-creator/things/refs/heads/main/src/assets/data.json'
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
