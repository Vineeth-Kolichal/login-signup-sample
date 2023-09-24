import express from 'express';
import { signup,login,dashboard } from '../controller/signup-controller.js';
import { emailcheckSignUp} from '../middleware/emailchecking.js';
import { checklogin } from '../middleware/checklogin.js';

const router=express.Router();

router.post('/signup',emailcheckSignUp,signup);

router.post('/login',login);

router.get('/dashboard',checklogin,dashboard);

export default router;