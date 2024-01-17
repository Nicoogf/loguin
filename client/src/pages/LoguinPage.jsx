import React from 'react';
import { useForm } from "react-hook-form" ;
import { useAuth } from '../context/authContext';
import { Link } from "react-router-dom" ;

const LoguinPage = () => {

  const { register, handleSubmit , formState: {errors} } = useForm() ; 
  const { signin , errors: signinErrors  } = useAuth () ;

  const onSubmit = handleSubmit( (data) => {
    signin(data)
  })

  return (
    <div className='h-[calc(100vh-100px)] flex items-center justify-center'>

      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

      {
        signinErrors.map( (error, i )=>(
              <div className='bg-red-500 p-2 text-white text-center my-2' key={i}> 
                {error}
              </div>  
        ) )
      }

        <h1 className='text-2xl font-bold'> Loguin </h1>

        <form onSubmit={ onSubmit }>
    
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


  <button type='submit'> Loguin </button>

        </form>

        <p className='flex gap-x-2 justify-between '> 
        No tienes una cuenta? <Link to="/register" className='text-blue-500'> Registrate </Link> 
        </p>

      </div>
    </div>
  )
}

export default LoguinPage