import React, { useState } from 'react'

export default function AddUser() {

    const [user,setUser]=useState({
      name:"",
      username:"",
      email:""
    });

    const{name,username,email}=user;

    const onInputChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value});
    };


  return <div className='container'>
    <div className='row'>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register User</h2>
          <div className='mb-3'>
            <label htmlFor='Name' className='form-laber'>
              Name
            </label>
            <input 
            type={'text'} 
            className='form-control'
            placeholder='Enter your name' 
            name='name'  
            value={name} 
            onChange={(e)=>onInputChange(e)}/>
          </div>
      </div>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register User</h2>
          <div className='mb-3'>
            <label htmlFor='Username' className='form-laber'>
              Username
            </label>
            <input 
            type={'text'} 
            className='form-control'
            placeholder='Enter your Username' 
            name='username' 
            value={username}
            onChange={(e)=>onInputChange(e)}/>
          </div>
      </div>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register User</h2>
          <div className='mb-3'>
            <label htmlFor='Email' className='form-laber'>
              Email
            </label>
            <input 
            type={'text'} 
            className='form-control'
            placeholder='Enter your email adress' 
            name='email' 
            value={email}
            onChange={(e)=>onInputChange(e)}/>
          </div>
          <button type='submit' className='btn btn-outline-primary'>
              Submit
          </button>
          <button type='submit' className='btn btn-outline-danger'>
              Cancel
          </button>
        </div>
    </div>
      
  </div>;
  
}
