import React, { useEffect } from 'react' ;
import { useForm } from "react-hook-form" ;
import { useAuth } from '../context/authContext';
import { useNavigate } from "react-router-dom" ;

const RegisterPage = () => {

    const { register , handleSubmit } = useForm() ;
    const {signup , isAuthenticated } = useAuth() ;
    const navigate =  useNavigate() ;

    useEffect(() => {
      if(isAuthenticated) navigate('/task')
    } , [isAuthenticated] )

   

    const onSubmit = handleSubmit(async (values) => {
      signup(values)
    })

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
        <form onSubmit={ onSubmit }>

            <input type='text' name="username" 
            {...register( 'username' , {required : true} )}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-lg m-2'
            placeholder='username'
            />

            <input type='email' name="email" 
            {...register( 'email' , {required : true } )}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-lg m-2'
            placeholder='email'
            />

            <input type='password' name="password" 
            {...register ('password' , {required : true} )}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-lg m-2'
            placeholder='password'
            />

            <button type='submit'> Registrar </button>

        </form>
    </div>
  )}

export default RegisterPage