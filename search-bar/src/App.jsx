import { useState } from 'react'
import {FaSearch} from 'react-icons/fa';
import './App.css'

function App() {
  const [showInput, setShowInput] = useState("false")
  const [bgCol, setBgCol] =useState("white")


  const handleClick = (e) =>{
    setBgCol("#1a1a1a");
    if(e.target.className==="container"){
      setShowInput(false);
      setBgCol("#fff")
    }
  }

  return (
    
    <section className="container"
    style={{backgroundColor: bgCol}}
    onClick={handleClick}
    >
      {showInput ?(
        <input type="text" placeholder='search...' />
      ):(
        <FaSearch onClick={()=>setShowInput(true)}/>
      )}

    </section>

   
  );
}

export default App
