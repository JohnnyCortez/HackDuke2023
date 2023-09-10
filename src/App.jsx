import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Information from './pages/information';
import Account from './pages/account';
import Discussion from './pages/Discussion';
import FootPrint from './pages/footprint';
import GetInvolved from './pages/getInvolved';
import News from './pages/news';
import CreateAccount from './pages/createAccount';
import SignIn from './pages/signIn';
import Home from './pages/home';
import CreatePost from './pages/createPost';
import { supabase } from './client';

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    async function auth() {
      const { data, error } = await supabase.auth.getSession();
      // console.log(data);

      if (data) {
        console.log('test');
        setUser(data.session.user.email);
        // Fetch the username based on the email from the accounts table
        const { data: userData, error: userError } = await supabase
          .from('accounts')
          .select('username')
          .eq('email', data.session.user.email)
          .single();
        // console.log(userData)
        if (userData) {
          setUsername(userData.username);
        } else {
          console.error('Error fetching username:', userError);
        }
      } else {
        console.log('test2');
        setUser(null);
        setUsername(null);
      }
    }
    auth();
  }, []);

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error('Error signing out:', error.message);
      } else {
        setUser(null);
        setUsername(null);
        console.log('User signed out');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <>
      <body>
        <ul className="navbar-list">
        <li id = "home-logo"><a href = "/">Ecostart</a><img src = "https://e7.pngegg.com/pngimages/964/395/png-clipart-natural-environment-graphics-environmental-science-natural-environment-globe-logo.png"></img></li>
      <li><a href="/news">News</a></li>
      <li><a href="/information">Information</a></li>
      <li><a href="/getInvolved">Get Involved</a></li>
      <li><a href="/discussion">Discussion</a></li>
      {user ? (
        <>
        <li><a href="/" onClick={(e) => { e.preventDefault(); signOut(); }}>Sign Out</a></li>
        <li><a href="/createPost" >Post</a></li>
        </>
      ) : (
        <>
          <li><a href="/signIn">Sign In</a></li>
          <li><a href="/createAccount">Create Account</a></li>
        </>
      )}
        </ul>
        {user ? (
          <>
            <p>Welcome {username || user}</p>
            <br />
          </>
        ) : (
          ''
        )}
      </body>
      <Routes>
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/discussion" element={<Discussion />} />
        <Route exact path="/footPrint" element={<FootPrint />} />
        <Route exact path="/getInvolved" element={<GetInvolved />} />
        <Route exact path="/information" element={<Information />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/createAccount" element={<CreateAccount />} />
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/createPost" element={<CreatePost username={username}/>} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
