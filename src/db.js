import mongoose from "mongoose" ;

export const connectDb = async() => {
    try {
        await mongoose.connect('mongodb://localhost/mern-db') ;
        console.log(">>>Conexion Database Exitosa")
    } catch (error) {
        console.log(error);
    } 
};