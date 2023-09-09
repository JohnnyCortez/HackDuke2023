import { useEffect, useState } from "react";
import { supabase } from "../client";


function SignIn() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    async function signIn(email, password) {
    try {
        const { user, error } = await supabase.auth.signInWithPassword({
        email: email, // Use the email field for the username
        password: password,
        });

        if (error) {
        console.error('Error signing in:', error.message);
        } else {
        console.log('User signed in:', user);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
    window.location = "/";
    }

    function handleClick() {
        signIn(email, password);
      }

    return (
        <>
        <h2>Sign In</h2>
        <div class="form">
          <label>Email:</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleClick}>Submit</button>
        </div>

        </>
    )
}

export default SignIn

