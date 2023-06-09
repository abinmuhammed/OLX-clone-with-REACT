import React,{useEffect,useContext} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from './Pages/Login'
import Create from './Pages/Create'
import { Authcontext, FirebaseContext } from './Store/Context'
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

function App() {
  const {setUser}=useContext(Authcontext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      console.log(user)
  setUser(user)
})
  })
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Router>
    </div>
  );
}

export default App;
