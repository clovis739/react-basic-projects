import { useState } from 'react'

import './App.css'

function App() {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  const [errorUserName, setErrorUserName] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("")


  const [userColor, setUserColor] = useState("")
  const [emailColor, setEmailColor] = useState("")
  const [passwordColor, setPasswordColor] = useState("")
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("")


function validate(e) {
  e.preventDefault();

  if(userName.length > 8){
    setErrorUserName("")
    setUserColor("green")
  } else{
    setErrorUserName("user name must be 8 letters long")
    setUserColor("red")
  }


  if(email.includes("@gmail")){
    setErrorEmail("")
    setEmailColor("green")
  } else{
    setEmailColor("red")
    setErrorEmail("email must have @gmail ")
  }


  if(password.includes("26@1g!").length > 8){
    setErrorPassword("")
    setPasswordColor("green")
  } else{
   setErrorPassword("password contains all characters ")
    setPasswordColor("red")
  }

  if(password != "" && password == confirmPassword){
    setErrorConfirmPassword("")
    setConfirmPasswordColor("green")
} else{
  setErrorConfirmPassword("password didn't match")
  setConfirmPasswordColor("red")
}
}

  return (
   <>
   <div className="card">
    <div className="card-image"></div>
    <form action=""
    >
      <input 
      type="text"
      placeholder='Name'
      style={{borderColor:userColor}}
      value={userName}
      onChange={(e)=>setUserName(e.target.value)} 
      />
      <p className="error">{errorUserName}</p>


      <input 
      type="email"
      placeholder='Email'
      style={{borderColor: emailColor}}
      value={email}
      onChange={(e)=>setEmail(e.target.value)} 
      />
      <p className="error">{errorEmail}</p>


      <input 
      type="text"
      placeholder='Password'
      style={{borderColor: passwordColor}}
      value={password}
      onChange={(e)=>setPassword(e.target.value)} 
      />
      <p className="error">{errorPassword}</p>


      <input 
      type="password"
      placeholder='confirm Password'
      style={{borderColor: confirmPasswordColor}}
      value={confirmPassword}
      onChange={(e)=>setConfirmPassword(e.target.value)} 
      />
      <p className="error">{ errorConfirmPassword}</p>

      <button className='submit-btn' onClick={validate}> Submit</button>
    </form>
   </div>
   </>
  )
}

export default App
