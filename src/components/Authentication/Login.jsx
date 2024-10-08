import React, { useState } from 'react'
import './Login.css'
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        email : '',
        password : ''
    })
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const handleAuthentication = () => {
        if (isAuthenticated) {
            dispatch(logout())
            window.alert("Logout successful")
            // setTimeout(() => {
            //     navigate('/')
            //     }, 2000);
           
          
        }
        else {
            dispatch(login())

            window.alert("Login successful")
          
            // setTimeout(() => {
            //     navigate('/')
            // }, 2000);
       
        }
    }

    const handleInputChange = (e)=>{

        const name = e.target.name

        setUserData((prev)=>{
            return {
                ...prev,
                [name] : e.target.value
            }
        })

    }

  return (
    <div className='login'>
        
        <div className="login-container">

        <h3>
            Log in
        </h3>
        <input type="text" placeholder='Username or email' name='email'  onChange={handleInputChange} />
        <input type="text" placeholder='Password' name='password' onChange={handleInputChange}/>

        <p style={{marginTop:"30px", fontWeight:'700', fontSize:'12px', marginTop : '20px'}}>Forgot password?</p>

        <button className={`email-login-button ${(userData.email!=='' && userData.password!='') && 'red-color' }`} onClick={()=>{
           handleAuthentication()
        }}>
            Log in
        </button>

        <p style={{marginTop:'10px',marginBottom:'5px', color:'#6d7074', fontSize:'12px'}}>OR</p>

        <button className={`gauth-login-button`}>
        <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.721 6.09c1.37 0 2.607.5 3.58 1.32l2.827-2.91C17.405 2.955 15.196 2 12.721 2 8.877 2 5.563 4.273 4.017 7.59l3.27 2.592c.75-2.41 2.872-4.091 5.434-4.091Z" fill="#EA4335"></path><path d="M3 12c0 1.591.353 3.091 1.016 4.41l3.27-2.591c-.22-.546-.31-1.182-.31-1.819 0-.636.09-1.272.31-1.863l-3.27-2.591A10.116 10.116 0 0 0 3 12Z" fill="#FBBC05"></path><path d="M12.721 22c2.386 0 4.64-.864 6.319-2.5l-3.093-2.455c-.884.591-1.988.864-3.226.864-2.563 0-4.683-1.682-5.435-4.046l-3.27 2.591C5.564 19.727 8.878 22 12.722 22Z" fill="#34A853"></path><path d="M22 12a8.52 8.52 0 0 0-.221-1.818H12.72v3.863h5.214c-.265 1.319-.972 2.318-1.989 3L19.04 19.5C20.851 17.818 22 15.273 22 12Z" fill="#4285F4"></path></svg>
        Log in with google
        </button>

        <button className='gauth-login-button'>
        <svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.713 10.569c-.009-1.639.741-2.876 2.259-3.787-.85-1.2-2.132-1.861-3.826-1.99-1.603-.126-3.356.923-3.997.923-.677 0-2.231-.88-3.45-.88C3.178 4.876.5 6.824.5 10.784c0 1.17.217 2.379.65 3.626.578 1.639 2.665 5.657 4.842 5.59 1.138-.027 1.942-.8 3.424-.8 1.436 0 2.181.8 3.45.8 2.195-.031 4.083-3.683 4.634-5.327-2.945-1.37-2.787-4.018-2.787-4.103Zm-2.556-7.332C13.39 1.79 13.277.473 13.241 0c-1.088.063-2.349.732-3.067 1.558-.79.884-1.255 1.978-1.156 3.21 1.179.09 2.254-.508 3.139-1.53Z" fill="#0C0C0C"></path></svg>
           Log in with Apple
        </button>

        <p className='text'>New to Peloton? <span>Sign up now.</span> </p>


        </div>

    </div>
  )
}

export default Login