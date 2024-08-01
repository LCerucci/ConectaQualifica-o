import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ErrorHandling } from '../Error/ErrorHandling.js';

dotenv.config();

export async function Authentication(req, res, next){    
    try{
        const token = req.header('Authorization')?.replace('Bearer ', '')  || req.cookies.token;;
    
        if(!token)
            res.status(401).json({message: "Acesso negado!"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    }catch(err){
        ErrorHandling.simplifyError(err);
        res.status(401).json({message: "Acesso negado!"});
    }
}