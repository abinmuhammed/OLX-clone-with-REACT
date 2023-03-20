import React, { useState,useContext } from 'react';
import {FirebaseContext} from '../../Store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from "react-router-dom";

function Login() {
const History=useHistory()
const [email,setemail]=useState('')
const [password,setPassword]=useState('')
const {firebase} = useContext(FirebaseContext)
const handlelogin=(e)=>{
e.preventDefault()
console.log(email,password)
firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    // Signed in
 alert('logged in')
    // ...
  History.push('/')
  })
  .catch((error) => {
    alert(error.message)
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlelogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
