import { useEffect, useState } from 'react'
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
import Home from './pages/home'
import { supabase } from './client'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function auth(){
      const {data} = await supabase.auth.getSession()
      console.log(data)
      if (data) {
        console.log("test")
        setUser(data.session.user.email);
        console.log(user)
      } else {
        console.log("test2")
        setUser(null);
    }
    }
    auth()
  }, []);

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
  
      if (error) {
        console.error('Error signing out:', error.message);
      } else {
        setUser(null)
        console.log('User signed out');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <>
    <h1>Eco Start</h1>

    <ul className="navbar-list">
      <li><a href="/">Home</a></li>
      <li><a href="/news">News</a></li>
      <li><a href="/information">Information</a></li>
      <li><a href="/getInvolved">Get Involved</a></li>
      <li><a href="/discussion">Discussion</a></li>
      {user ? (
        <li><a href="/" onClick={(e) => { e.preventDefault(); signOut(); }}>Sign Out</a>
        </li>
      ) : (
        <>
          <li><a href="/signIn">Sign In</a></li>
          <li><a href="/createAccount">Create Account</a></li>
        </>
      )}
    <body>


    <ul className = "navbar-list">
      <li id = "home-logo"><img src = "https://e7.pngegg.com/pngimages/964/395/png-clipart-natural-environment-graphics-environmental-science-natural-environment-globe-logo.png"></img>EcoStart</li>
      <li><a href = "/" >Home</a></li>
      <li><a href = "/news" >News</a></li>
      <li><a href = "/information" >Information</a></li>
      <li><a href = "/getInvolved" >Get Involved</a></li>
      <li><a href = "/discussion" >Discussion</a></li>
      <li><a href = "/signIn" >Sign In</a></li>
      <li><a href = "/createAccount" >Create Account</a></li>
    </ul>
  <Routes>
    <Route exact path="/account" element={<Account />} />
    <Route exact path="/discussion" element={<Discussion />} />
    <Route exact path="/footPrint" element={<FootPrint />} />
    <Route exact path="/getInvolved" element={<GetInvolved />} />
    <Route exact path="/information" element={<Information />} />
    <Route exact path="/news" element={<News />} />
    <Route exact path="/createAccount" element={<CreateAccount />} />
    <Route exact path="/signIn" element={<SignIn />} />
    <Route exact path="/" element={<Home />} />
  </Routes>
  </>
  )
}

export default App
