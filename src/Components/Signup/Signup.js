import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/Context';
import './Signup.css';
import { useHistory } from "react-router-dom";

export default function Signup() {
 const History=useHistory()
  const [Username,setUsername]=useState('')
  const [Email,setEmail]=useState('')
  const [Phone,setPhone]=useState('')
  const [Password,setPassword]=useState('')
  const {firebase} = useContext(FirebaseContext)
const handleSubmit=(e)=>{
  e.preventDefault()
  firebase.auth().createUserWithEmailAndPassword(Email, Password)
  .then((result) => {
    // Signed in 
   result.user.updateProfile({displayName:Username}).then(()=>{
    firebase.firestore().collection('users').add({
      id:result.user.uid,
      Username:Username,
      Phone:Phone
    }).then(()=>{
      History.push('/login')
    })
   })
    
  })
  
}


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={Username}
            onChange={(e)=>{setUsername(e.target.value)}}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={Email}
            onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={Phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={Password}
            onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
