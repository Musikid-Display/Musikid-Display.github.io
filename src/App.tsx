import { useState } from 'react'
import './Fonts.css'
import './App.css'
import TiltedCard from './components/TiltedCard';
import ProfileCard from './components/SongCard'
import cover1 from './assets/Covers/Cover1.png'
import artist1 from './assets/Artists/Artist1.png'
import SongCard from './components/SongCard';



function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App" style={{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "40px", flexWrap: "wrap", padding: "20px"}}>

<SongCard />
  
    </div>
  )
}

export default App
