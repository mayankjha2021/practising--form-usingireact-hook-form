 "use client"
import React from 'react'
import { useForm } from 'react-hook-form'

const page = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors,isSubmitting},
  } = useForm();
const delay = (d)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },d * 1000);
  })
}
  const onSubmit= async (data)=> {
   
   //await delay(4) //simulating network delay
    let r = await fetch("https://localhost:3000/")
    let res= await r.text()
    console.log(data,res);
   /* if(data.username !=="navin"){
     setError("myform",{message:"your form is not in good order"})
    }
    if(data.username ==="ankita"){
      setError("blocked",{message:"sorry this user is blocked"})
    } */ 
  }
  
  return (
    <>
    {isSubmitting && <div>Loading...</div>}
    <div className='container'>
    <form action='' onSubmit={handleSubmit(onSubmit)}>
     <input className='aj' placeholder='username' {...register("username", {required:{value:true,message:"This field is required"},minLength:{value:3,message:"your username is less than minlength"},maxLength:{value:8,message:"value is bigger than maxm limit"}})} type='text'/>
     {errors.username && <div className='red'>{ errors.username.message}</div>}
     <br/>
     <input className='mj' placeholder='password' {...register("password")} type='password'/>
     <br/>
     <input disabled={isSubmitting} type='submit' value='submit'/>
     {errors.myform && <div className='red'>{errors.myform.message}</div>}
     {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
    </form>
</div>
    
    </>
  )
}

export default page