import { useEffect, useState } from "react";
import { supabase } from "../client";

function CreateAccount() {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirm, setConfirm] = useState(false);

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
            })
            .select();

        signUp(email, password);
        //   window.location = "/";
    };

    const handleClick = async (e) => {
        e.preventDefault()
        addAccount();
        setConfirm(true);
    }

    return (
      <>
        <h2>Create Account</h2>

        <div className="form"> {/* Add class name to the container */}
            {confirm ? (
                <p className="confirm-message">Please Confirm Your Email</p>
            ) : (
                <>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value.toLowerCase())}
                    />

                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button onClick={handleClick}>Submit</button>
                </>
            )}
        </div>
        </>
    );
}

export default CreateAccount;

