import { ErrorHandling } from "../Error/ErrorHandling.js"
import { ValidationError } from "../Error/InternalError.js";

export function validadeFields(req, _res, next){
    try{
        const verify = Object.values(req.body);

        if(verify.every(x => x === undefined || x === null || x === ""))
           throw new ValidationError("Some fields must be undefined or null.");
        else
            next();    
    }
    catch(err){
        ErrorHandling.HandleError(err, req, _res);
        next();
    }  
}