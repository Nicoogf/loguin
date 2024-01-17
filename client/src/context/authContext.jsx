import React , { createContext  , useState , useContext} from 'react' ;
import { registerRequest } from '../api/auth' ;

export const AuthContext = createContext() ;

export const useAuth = () => {
    const context = useContext(AuthContext) ;
    if(!context){
        throw new Error("useAuth debe usarse dentro de un AuthProvider")
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [ user , setUser] = useState( null ) ;
    const [ isAuthenticated , setisAuthenticated ] = useState( false ) ;
    const [ errors , setErros ] = useState( [] )

    const signup = async ( user ) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setisAuthenticated(true)
        } catch (error) {
            // console.log(error.response)
            setErros(error.response.data)
        }
       
    }

    return(
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticated,
            errors
        }}> 
            { children }    
        </AuthContext.Provider>
    )
}