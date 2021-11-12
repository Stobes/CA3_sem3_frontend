import React, { useState,useEffect } from "react"
import facade from "./apiFacade";
import Header from "./Header";
 
function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
 
  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
  }
 
  return (
    <div>
      <h2>Login As User</h2>
      <form onChange={onChange} >
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  )
}


function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
  
  useEffect(() => {
    facade.fetchData().then(data=> setDataFromServer(data.msg));}, [])
  console.log(dataFromServer)
  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  )
}

function LoggedInAdmin() {
  const [dataFromServerAdmin, setDataFromServerAdmin] = useState("Loading...")
  
  useEffect(() => {
    facade.fetchDataAdmin().then(data=> setDataFromServerAdmin(data.msg));}, [])
  console.log(dataFromServerAdmin)
  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServerAdmin}</h3>
    </div>
  )
}
 
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
 
  const logout = () => { facade.logout()
    setLoggedIn(false) } 

  const login = (user, pass) => {facade.login(user,pass)
    .then(res =>setLoggedIn(true));}
    
    
  const [loggedInAdmin, setLoggedInAdmin] = useState(false)
 
  const logoutAdmin = () => { facade.logout()
    setLoggedInAdmin(false) } 

  const loginAdmin = (user, pass) => {facade.login(user,pass)
    .then(res =>setLoggedInAdmin(true));}
 
  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>)}
      
      {!loggedInAdmin ? (<LogIn login={loginAdmin} />) :
        (<div>
          <LoggedInAdmin />
          <button onClick={logoutAdmin}>Logout Admin</button>
        </div>)}

      <Header />
    </div>
  )
 
}
export default App;