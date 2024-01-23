import React, { useState } from "react"; 
import Navbar from "../component/Navbar";
import {} from '../Css/Login.css'
import { Lock } from 'lucide-react';
import { Mail } from 'lucide-react';
import { GiCrossFlare } from "react-icons/gi";
import { User } from 'lucide-react';
import { Contact } from 'lucide-react';

const SignUp=()=>{

    const [credentials,setcredentials]=useState({name:"" ,email:"",mobileNumber:"",password:""});

    const handleSubmit=async(event)=>{
        event.preventDefault();
        const response= await fetch("http://localhost:5000/SignUp",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,mobileNumber:credentials.mobileNumber,password:credentials.password})
        })
        const json=await response.json();
        console.log(json)
        if(!json.success){
            alert("wrong credintles")
        }
        if(json.success){
            alert("signup successfully")
        }
    }
    
    const handleNameChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
    return<>
    <div className="Signuppage">
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

            <div style={{height:"370px"}}className="FormMainContainer SignUPFormMainContainer">

                <div>
                    <h2>SignUp</h2>
                </div>

                <div className="asdf">
                    <div className="formIcon"><User/></div>
                    <input type="name" name="name" value={credentials.name} onChange={handleNameChange} id="" placeholder="Your Name"/>
                </div>

                <div className="asdf">
                    <div className="formIcon"><Mail/></div>
                    <input type="email" name="email" value={credentials.email} onChange={handleNameChange} id="" placeholder="Your Email"/>
                </div>

                <div className="asdf">
                    <div className="formIcon"><Contact/></div>
                    <input type="Number" name="mobileNumber" value={credentials.mobileNumber} onChange={handleNameChange} id="" placeholder="Mobile Number"/>
                </div>

                <div className="asdf"> 
                <div className="formIcon"><Lock/></div>         
                    <input type="password" name="password" value={credentials.password} onChange={handleNameChange} id="" placeholder="Password"/>
                </div> 

                <div className="FormButton">
                    <button onClick={handleSubmit}>SignUp</button>
                </div>

            </div>

            </div>

        </div>
    </div>
    
    </>
}
export default SignUp;