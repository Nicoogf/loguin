import { z } from "zod" ;

export const registerSchema = z.object({
    username : z.string ({
        required_error: 'El Username es Requerido'
    }),
    email: z.string({
        required_error: "El Email es Requerido"
    }).email({
        message: "El Email es invalido"
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6 ,{
        message: 'La contraseña debe tener al menos 6 Caracteres'
    })
})

export const loguinSchema = z.object({
    email: z.string({
        required_error: "El email es requerido"
    }).email({
        message: "El email es invalido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida"
    }).min( 6 ,{
        message: "La contraseña debe tener al menos 6 caracteres"
    })
})