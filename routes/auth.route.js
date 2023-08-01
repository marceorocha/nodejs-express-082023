import  express  from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
    '/register', 
        [
    body('email', 'Formato de email incorrecto')
    .trim()    
    .isEmail()
    .normalizeEmail(), 
    body("password", "password incorrecto")
    .trim()
    .isLength({min:6})
    .custom((value, { req }) => {
        if(value !== req.body.repassword)
        throw new Error('No coinciden las contraseñas');
        return value; 
    })
    
], register)

router.post('/login', login)



export default router;