//import React from "react"
//import ReactDOM from "react-dom"


//import App from "./App"

function Header(){
    return (
    <div class="front-side">
        <div class="side-bar">
            <img src="./images/login_side.webp" align="left" class="side-img" height="100%" width="600px"></img>
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


ReactDOM.render(<Header />,document.getElementById("root"))