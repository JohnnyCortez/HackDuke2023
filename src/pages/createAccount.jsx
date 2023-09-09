import { useEffect, useState } from "react";
import { supabase } from "../client";

function CreateAccount() {
    const [username, setUsername] = useState(null)
    const [country, setCountry] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [zipCode, setZipCode] = useState(null)
    const [bio, setBio] = useState(null)
    const [password, setPassword] = useState(null)


    const addAccount = async () => {
        await supabase
          .from("accounts")
          .insert({
            username: username,
            country: country,
            city: city,
            state: state,
            zipCode: zipCode,
            bio: bio,
            password: password,
          })
          .select();
        console.log("success");
        window.location = "/";
      };

      function handleClick() {
        addAccount();
      }

    return (
        <>
        <h2>Create Account</h2>
        <div class="form">
          <label>User Name:</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Bio:</label>
          <input
            type="text"
            onChange={(e) => setBio(e.target.value)}
           />

          <label>Country:</label>
          <input
            type="text"
            onChange={(e) => setCountry(e.target.value)}
          />

          <label>City:</label>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />
          <br />

          <label>State:</label>
          <input
            type="text"
            onChange={(e) => setState(e.target.value)}
          />

          <label>Zip Code:</label>
          <input
            type="text"
            onChange={(e) => setZipCode(e.target.value)}
          />
          <button onClick={handleClick}>Submit</button>
        </div>

        </>
    )
}

export default CreateAccount