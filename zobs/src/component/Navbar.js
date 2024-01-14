import {React, useState} from 'react'
import {} from '../Css/Navbar.css'
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { GiCrossFlare } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar=()=>{
    const [IsOpen,setIsOpen]=useState(false);
    const toggleButton=()=>{
        setIsOpen(!IsOpen);
    }

   
    return (<>
    <div className='Header'>

        <div className="logoSide a">
            <div className="companyIcon active zx">
               <GiCrossFlare/>
            </div>
            <div className="companyName zx">
                ZOBS
            </div>
        </div>

        <div className="navbarMid a">
            <ul>
                <li className="navbarNames active">azay</li>
                <li className="navbarNames">My Jobs</li>
                <li className="navbarNames">azay</li>
                <li className="navbarNames"><Link to={"/PostAJob"}>Post A Job</Link></li>
            </ul>
        </div>

        <div className="buttonside a">
            <div className="loginButton">
                <button><Link className='LinkTag' to="">Log In</Link></button>
            </div>

            <div className="logoutButton">
                <button><Link className='LinkTag' to="">Sign Up</Link></button>
            </div>
        </div>

        <div className="toggleButton">

            <button onClick={toggleButton}>
            {
                IsOpen ? <ImCross/>:<FaBars/>
            }
            </button>

        </div>
        </div>

        
        {/* for mobile */}
        {IsOpen && (
          <div className="headerMobile">
            <div className="navbarMidMobile a">
              <ul>
              <li className="navbarNames active">azay</li>
                <li className="navbarNames">My Jobs</li>
                <li className="navbarNames">azay</li>
                <li className="navbarNames">Post A Job</li>
              </ul>
            </div>

            <div className="buttonsideMobile a">
              <div className="loginButtonMobile">
              <button><Link className='LinkTag active' to="">Log in</Link></button>

              </div>
              <div className="logoutButtonMobile">
              <button><Link to="" className='LinkTag'>Sign Up</Link></button>
              </div>
            </div>
          </div>
        )}
    </>)
}
export default Navbar;