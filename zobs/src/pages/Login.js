import React, { useState } from "react"; 
import Navbar from "../component/Navbar";
import {} from '../Css/Login.css'
import { Lock } from 'lucide-react';
import { Mail } from 'lucide-react';
import { GiCrossFlare } from "react-icons/gi";


const Login=()=>{
    const [credentials,setcredentials]=useState({email:"" ,password:""});
    const handleSubmit=async(event)=>{
    console.log(JSON.stringify({email:credentials.email,password:credentials.password}))

        event.preventDefault();
        const response=await fetch("http://localhost:5000/LogIn",{        
            method:"POST",
            headers:{
                'Content-Type':'application/json'     
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})

        })
        
        const json=await response.json();
        console.log(json);

        if(!json.success){
            alert("wrong information you are providing")
        }
        if(json.success){
            alert("login successfully")
        }
    }
    const HandleNamechange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

    return<>
    <div className="loginpage">
        <div>
            <Navbar/>
        </div>
        <div className="upperFormContainer">

            <div className="leftSide">
                <div className="leftsideIcon">
                    <GiCrossFlare/>
                </div>
                <div className="leftSideLogo active">
                    <p>ZOBS</p>

                </div>
                <div className="leftsideTag">
                    <p>“Your dream job awaits!”</p>

                </div>
            </div>
            <div className="rightside">

            <div className="FormMainContainer">

                <div>
                    <h2>LogIn</h2>
                </div>

                <div className="asdf">
                    <div className="formIcon"><Mail/></div>
                    <input type="email" name="email" value={credentials.email} onChange={HandleNamechange}  id="emailInput" placeholder="Your Email"/>
                </div>

                <div className="asdf"> 
                <div className="formIcon"><Lock/></div>    
                        <input type="password" name="password" value={credentials.password} onChange={HandleNamechange} placeholder="Password"/>     
                    {/* <input type="password" name="password" value={credentials.password} onChange={HandleNamechange} id="passwordInput" placeholder="Password"/> */}
                </div> 

                <div className="FormButton">
                    <button onClick={handleSubmit}>Submit</button>
                </div>

            </div>

            </div>

        </div>
    </div>
    </>
}

export  default Login;