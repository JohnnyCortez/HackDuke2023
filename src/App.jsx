import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Information from './pages/information'
import Account from './pages/account'
import Discussion from './pages/Discussion'
import FootPrint from './pages/footprint'
import GetInvolved from './pages/getInvolved'
import News from './pages/news'
import CreateAccount from './pages/createAccount'
import SignIn from './pages/signIn'
import './index.css'
function App() {

  return (
    <>
    <h1>Eco Start</h1>
    <ul className = "navbar-list">
      <li><a href = "/" >Home</a></li>
      <li><a href = "/news" >News</a></li>
      <li><a href = "/information" >Information</a></li>
      <li><a href = "/getInvolved" >Get Involved</a></li>
      <li><a href = "/discussion" >Discussion</a></li>
      <li><a href = "/signIn" >Sign In</a></li>
      <li><a href = "/createAccount" >Create Account</a></li>
    </ul>
     <Routes>
        <Route exact path = "/account" element = {<Account/>} />
        <Route exact path = "/discussion" element = {<Discussion/>} />
        <Route exact path = "/footPrint" element = {<FootPrint/>} />
        <Route exact path = "/getInvolved" element = {<GetInvolved/>} />
        <Route exact path = "/information" element = {<Information/>} />
        <Route exact path = "/news" element = {<News/>} />
        <Route exact path = "/createAccount" element = {<CreateAccount/>} />
        <Route exact path = "/signIn" element = {<SignIn/>} />
     </Routes>
    </>
  )
}

export default App
