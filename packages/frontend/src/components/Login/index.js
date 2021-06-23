import React from "react";
import './index.css';

export default function Login(){
    return (
        <div className="login-wrapper">
            <h1>Please Log in</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text"></input>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password"></input>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}