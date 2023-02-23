import React, { useState } from "react";

export default function LoginForm(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");

    const handleRegister = (event) => {
        //event.preventDefault();

        console.log("User register with:", username, password, email)
    };

    return(
        <form onSubmit={handleRegister}>
            <label>
                Username
                <input 
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <label>
                Password
                <input 
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}                
                />
            </label>
            <label>
                Email 
                <input 
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <button type="Submit"> Submit </button>
        </form>
    );
};