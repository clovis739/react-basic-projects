import { useState } from 'react'

import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")

 function display(value){
  setInputValue(inputValue+ value)
 }

 function calculator(){
  let answers = eval(inputValue);
  setInputValue(answers);
 }

 function clear(){
  setInputValue("");
 }


  return (
   <>
    <form name="calc" className="calculator">
      <input type="text"
      className='value'
      value={inputValue}
      />
      <span className="clear num" onClick={()=> clear()} >C</span>
      <span onClick={()=>display("/")}>/</span>
      <span onClick={()=>display("*")}>*</span>
      <span onClick={()=>display("7")}>7</span>
      <span onClick={()=>display("8")}>8</span>
      <span onClick={()=>display("9")}>9</span>
      <span onClick={()=>display("-")}>-</span>
      <span onClick={()=>display("4")}>4</span>
      <span onClick={()=>display("5")}>5</span>
      <span onClick={()=>display("6")}>6</span>
      <span onClick={()=>display("+")} className='plus'>+</span>
      <span onClick={()=>display("1")}>1</span>
      <span onClick={()=>display("2")}>2</span>
      <span onClick={()=>display("3")}>3</span>
      <span onClick={()=>display("0")}>0</span>
      <span onClick={()=>display("00")}>00</span>
      <span onClick={()=>display(".")}>.</span>
      <span onClick={()=>calculator()} className='num equal'>= </span>
    </form>

   </>
  )
}

export default App