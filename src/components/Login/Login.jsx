import React, { useEffect } from 'react'
import './login.css'

const Login = () => {
  useEffect(() => {
    let signupbt = document.getElementById("signupbt");
    let signinbt= document.getElementById("signinbt");
    let namfi = document.getElementById("namfi");
    let vs = document.getElementById("vs");

    signinbt.onclick = function(){
      namfi.style.maxHeight = "0";
      vs.innerHTML = "LOGIN";
      signupbt.classList.add("disa");
      signinbt.classList.remove("disa");
    }
    signupbt.onclick = function(){
      namfi.style.maxHeight = "60px";
      vs.innerHTML = "sign up";
      signupbt.classList.remove("disa");
      signinbt.classList.add("disa");
    }
  }, []);

  return (
    <div className="container">
        <div className="fbox">
            <h1 id="vs">Sign up</h1>
            <form>
                <div className="inp">
                    <div className="inpf" id="namfi">
                        <input type="text" required placeholder="name"/>
                    </div>

                    <div className="inpf">
                        <input type="email" required placeholder="Email"/>
                    </div>

                    <div className="inpf">
                     
                        <input type="password" required placeholder="password"/>
                    </div>
                    <p>forget password <a href="http://instagram.com/vishnu_sparkles">click here?</a></p>
                </div>
                <div className="btf">
                    <button type="button" id="signupbt">Sign up</button>
                    <button type="button" id="signinbt" className="disa" >login</button>

                </div>
                <div className="click">
                    <button onClick={() => console.log("Clicked!")} className="click1">submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
