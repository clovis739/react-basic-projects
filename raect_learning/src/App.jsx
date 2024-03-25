import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState("clov")
  const [data, setData] = useState([])

  useEffect(() =>{
    async function getData(){
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data= await response.json();
      if(data && data.length)setData(data);

    }
    console.log("clovis")
    document.title =`clo(${value})`

    getData()
  }, [value])
  return (
    <>
      
      <ul>
        {data.map((item) =>(
          <li key={Math.random()}>{item.title}</li>
        ))}
      </ul>
      <h1>{value}</h1>
      <button onClick={() => setValue(value +1 )}>Click me </button>
      
      
      
    </>
  );
}

export default App
