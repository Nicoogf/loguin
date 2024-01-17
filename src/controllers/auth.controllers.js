import User from "../models/user.model.js" ;
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";

export const register = async (req,res) => {
   const {email, password, username} = req.body ;

   try {
    const userFound = await User.findOne({email}) 
    if(userFound) return res.status(400).json( ["El email ya existe"] )
    
    const passwordHash = await bcrypt.hash(password,10) ; 

    const newUser = new User({
        username,
        email,
        password : passwordHash
       })

       const userSaved = await newUser.save();
       const token = await createAccesToken({id: userSaved.id})
       res.cookie( 'token' , token)
       res.json ({
            id: userSaved.id,
            name : userSaved.username,
            email: userSaved.email,
            createAt : userSaved.createdAt,
            updateAt : userSaved.updatedAt 
        });   
      
   } catch (error) {
     console.log(error)
     res.status(500).json({message : error.message})
   }
}

export const loguin = async (req,res) => {
  const {email, password } = req.body ;

  try {  
   const userFound = await User.findOne({email}) 

   if(!userFound){
    return res.status(400).json({message:"User not found"})
   }

   const isMatch = await bcrypt.compare( password , userFound.password) ; 

   if(!isMatch) return res.status(400).json({message:"Incorrect Password"})

  const token = await createAccesToken({ id: userFound.id})
      res.cookie( 'token' , token)
      res.json ({
           id: userFound.id,
           name : userFound.username,
           email: userFound.email,
           createAt : userFound.createdAt,
           updateAt : userFound.updatedAt 
       });   
     
  } catch (error) {
    console.log(error)
    res.status(500).json({message : error.message})
  }
}

export const logout = async (req,res) =>{
  res.cookie('token' , '' , {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)
  if(!userFound) return res.status(400).json({message : "Usuario no encontrado"})
  return res.json({
    id: userFound.id ,
    username : userFound.username,
    email: userFound.email,
    createAt :userFound.createdAt ,
    updateAt: userFound.updatedAt
  })
}