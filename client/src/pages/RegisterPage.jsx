import React, { useEffect } from 'react' ;
import { useForm } from "react-hook-form" ;
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from "react-router-dom" ;

const RegisterPage = () => {

    const { register , handleSubmit , 
      formState:{
          errors
    } } = useForm() ;
    const {signup , isAuthenticated , errors: registerErrors } = useAuth() ;
    const navigate =  useNavigate() ;

    useEffect(() => {
      if(isAuthenticated) navigate('/task')
    } , [isAuthenticated] )

   

    const onSubmit = handleSubmit(async (values) => {
      signup(values)
    })
    
    useEffect(()=> {
      if(isAuthenticated) navigate("/tasks")
    },[isAuthenticated])

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      {
        registerErrors.map( (error, i )=>(
              <div className='bg-red-500 p-2 text-white' key={i}> 
                {error}
              </div>  
        ) )
      }
        <form onSubmit={ onSubmit }>

            <input type='text' name="username" 
            {...register( 'username' , {required : true} )}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-lg m-2'
            placeholder='username'
            />

            {
              errors.username && (
                <p className='text-red-500'> El username es Requerido </p>
              )
            }

            <input type='email' name="email" 
            {...register( 'email' , {required : true } )}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-lg m-2'
            placeholder='email'
            />

            { 
              errors.email && (
                <p className='text-red-500'> El Email es Requerido </p>
              )
            }

            <input type='password' name="password" 
            {...register ('password' , {required : true} )}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-lg m-2'
            placeholder='password'
            />

            { 
              errors.password && (
                <p className='text-red-500'> La contraseña es Requerida </p>
              )
            }
           

            <button type='submit'> Registrar </button>

            
              <p className='flex gap-x-2 justify-between '> 
              Ya tienes una cuenta? <Link to="/loguin" className='text-blue-500'> Inicia Session </Link> 
              </p>

        </form>
    </div>
  )}

export default RegisterPage