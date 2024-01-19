import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const Navbar = () => {

    const { isAuthenticated , logout ,user} = useAuth()
  return (
    <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>

        <Link to ="/">
         <h1 className='text-2xl font-bold'>Task Manager</h1>
        </Link>
      

        <ul className='flex gap-x-2'>
          { isAuthenticated ? (
            <div className='flex gap-x-2'> 
                <li>
                Welcome {user.username}               
                </li>

                <li>
                 <Link to = "/add-task" className='bg-indigo-500 px-4 py-2 rounded-lg'> Agregar Tarea </Link>
                </li>

                <li>
                 <Link to = "/" onClick={ () => logout() }>Cerrar Sesion </Link>
                </li>
            </div>
          ) : (  
           <div className='flex gap-x-2'> 
            <li>
                <Link to = "/loguin" className='bg-indigo-500 px-4 py-2 rounded-lg'> Loguin</Link>
            </li>   
            <li>
                <Link to = "/register" className='bg-indigo-500 px-4 py-2 rounded-lg'> Register</Link>
            </li> 
    
          </div>) }
            
        </ul>
    </nav>
  )
}

export default Navbar