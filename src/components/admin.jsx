import React, { useState } from 'react'
import styles from '../style'
import {Navbar, SendButton, Dashboard, Copyright, Developer} from './'

const Login=()=>{
    const [form, setForm] = useState({});
    const [isSubmitted, setSubmit] = useState(false);
    const [authenticUser, setAuthentic] = useState(false);


    const handleForm=(e)=>{
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!isSubmitted)
        {  const response = await fetch('https://api.frankdispatchingservices.com/admin-login',{
            method:'POST',
            body: JSON.stringify(form),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          let authStatus = await response.json();
          if(authStatus==true){
            alert("Login Successful");
            setAuthentic(true);
          }
        }
        
        setSubmit(true);
      }

    return (
        <div>
           {!isSubmitted&&( <div className='flex flex-col' >
                <p className='center-text flex justify-center'>LOGIN</p>
                <form onSubmit={handleSubmit} className='flex justify-center'>
                    <div className='flex flex-col justify-center'>
                        <input required name='username' onChange={handleForm} type='text' placeholder='Username..' className='login-field'></input>
                        <input required name='password' onChange={handleForm} type='password' placeholder='Password..'  className='login-field'></input>
                        <button type='submit' className='mt-8'><SendButton/></button>
                    </div>
                </form>
            </div>)}
            {authenticUser&&(
                <div>
                    <Dashboard/>
                </div>
            )}
        </div>
    )
}


const Admin = () => {
    const [isAdmin,setAdmin] = useState(false);

    return (
        <div>
            <div className="w-full">
                <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
                    <div className={`${styles.boxWidth}`}>
                    <Navbar />
                    <hr/>
                    </div>
                </div>
            </div>
            {
                !isAdmin&&(
                    <div className=' pb-8 bg-gray-100'>
                        <Login/>
                    </div>

                )
            }
            
        </div>
    )
}

export default Admin
