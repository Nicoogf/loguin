import { Router } from "express" ;
import { logout, loguin , profile, register } from "../controllers/auth.controllers.js" ;
import { authRequire } from "../middlewares/validateToken.js" ;
import { validateSchema } from "../middlewares/Validator.middleware.js" ;
import {registerSchema , loguinSchema} from "../schemas/auth.schemas.js" ;

const router = Router() ;

router.post('/register' , validateSchema(registerSchema) ,  register ) ;
router.post('/loguin' , validateSchema(loguinSchema), loguin ) ;
router.post('/logout' , logout) ;
router.get('/profile' , authRequire , profile) ;

export default router ;