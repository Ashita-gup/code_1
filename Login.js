//import React from "react"
//import ReactDOM from "react-dom"


//import App from "./App"


function Login(){
    return (
    <div class="front-side">
        <div class="side-bar">
            <img src="./images/login_side.webp" align="left" class="side-img" height="100%" width="100%"></img>
        </div>
        <div class="main-sec">
        <h2 class="main-head">Welcome to Vuexy! <span class="wave">👋</span></h2>
        <p class="mcl">Please sign-in to your account and start the adventure</p>
        <label for="email" class="main-mail">Email</label><br></br>
        <input type="email" id="email" class="mail-cl" name="email" placeholder="Enter your email :)"></input><br></br><br></br>
        <label for="pwd" class="main-pass">Password</label><br></br>
        <input type="password" id="pwd" class="pass-cl" name="pwd" placeholder="Enter your password :)"></input><br></br><br></br>
        <input type="checkbox" name="opt" id="opt" class="chk"></input>
        <label for="opt" class="main-opt">Remember me </label><a href="./index3.html" class="fgp">Forgot password ?</a><br></br><br></br>
        <input type="submit" value="Login" class="fnl"></input>
        <p class="ques">New on our platform?</p>
        <a href="./index2.html" class="ln">Create an account</a>
        <h2 class="hr-lines">OR</h2>
        <i class="fa fa-google circle"></i>
        
       
        
        </div>
    </div>)
    }


ReactDOM.render(<Login />,document.getElementById("root"))

/*import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert('Login successful!');
    } catch (error) {
      console.error('Error during login:', error.message);
      alert(error.message || 'Login failed');
    }
  };

  return (
    <div className="front-side">
      <div className="side-bar">
        <img
          src="./images/login_side.webp"
          alt="Login Side"
          className="side-img"
          height="100%"
          width="600px"
        />
      </div>
      <div className="main-sec">
        <h2 className="main-head">Welcome to Vuexy! <span className="wave">👋</span></h2>
        <p className="mcl">Please sign-in to your account and start the adventure</p>
        <label htmlFor="email" className="main-mail">Email</label><br />
        <input
          type="email"
          id="email"
          className="mail-cl"
          name="email"
          placeholder="Enter your email :)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <label htmlFor="pwd" className="main-pass">Password</label><br />
        <input
          type="password"
          id="pwd"
          className="pass-cl"
          name="pwd"
          placeholder="Enter your password :)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <input type="submit" value="Login" className="fnl" onClick={handleLogin} />
      </div>
    </div>
  );
}

ReactDOM.render(<Login />,document.getElementById("root"))

//export default Login;*/

