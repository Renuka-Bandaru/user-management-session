import React, { useState } from 'react';
import  './CreateUser.css';

const CreateUser = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)


    const CreateUserWithTimeStamp = async()=>{
        try{
            const response = await post("https://api.escuelajs.co/api/v1/users/",
                    {
                    "name": "Nicolas",
                    "email": email,
                    "password": password,
                    "avatar": "https://picsum.photos/800"
                    })
        }catch(error){
            console.error("Error in creating user", error)
        }finally{
            setLoading(false)
        }
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(email && password){
            CreateUserWithTimeStamp()
        }
    }
    
  return (
    <div>
        <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className='user-details'>
            <label >Email Address</label>
            <input type='email' value={email} placeholder='enter your Email' onChange={(e) => setEmail(e.target.value)}/>
        </div >

        <div className='user-details'>
            <label>Password</label>
            <input type='password' value={password} placeholder='enter your Password' onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button type='submit' disabled={loading}>{loading ? "Creating user....." : "Create User"}</button>
      </form>
    </div>
  )
}

export default CreateUser;
