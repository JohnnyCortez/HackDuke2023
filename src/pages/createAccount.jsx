import { useEffect, useState } from "react";
import { supabase } from "../client";

function CreateAccount() {
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [country, setCountry] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [zipCode, setZipCode] = useState(null)
    const [bio, setBio] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirm, setConfirm] = useState(false)

    async function signUp(email, password) {
        try {
          const { user, error } = await supabase.auth.signUp({
            email: email, // Use the email field for the username
            password: password,
          });
      
          if (error) {
            console.error('Error signing up:', error.message);
          } else {
            console.log('User signed up:', user);
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
    }


    const addAccount = async () => {
        await supabase
          .from("accounts")
          .insert({
            username: username,
            email: email,
            country: country,
            city: city,
            state: state,
            zipCode: zipCode,
            bio: bio,
          })
          .select();

          signUp(email, password)
        //   window.location = "/";
      };

      function handleClick() {
        addAccount();
        setConfirm(true)
      }

    return (
        <>
        {confirm ? <p>Please Confirm Your email</p> :
        (<>
        <h2>Create Account</h2>
        <div class="form">
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Username:</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
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

          <label>State:</label>
          <input
            type="text"
            onChange={(e) => setState(e.target.value)}
          />

          <label>Zip Code:</label>
          <input
            type="number"
            onChange={(e) => setZipCode(e.target.value)}
          />
          <br />
          <button onClick={handleClick}>Submit</button>
        </div>
        </>)
        }
        </>
    )
}

export default CreateAccount


{/* <div class="container">
  <form action="/action_page.php">
  <div class="row">
    <div class="col-25">
      <label for="fname">First Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your name..">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Last Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Your last name..">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="country">Country</label>
    </div>
    <div class="col-75">
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Subject</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    </div>
  </div>
  <br>
  <div class="row">
    <input type="submit" value="Submit">
  </div>
  </form>
</div> */}
