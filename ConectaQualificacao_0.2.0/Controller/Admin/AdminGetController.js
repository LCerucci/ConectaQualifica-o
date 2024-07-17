import { ErrorHandling } from "../../Error/ErrorHandling";
import { AdminService } from "../../Services/Admin/AdminGetService";

export class AdminController{
    constructor(){
    }

    async authenticateUser(req, res, next){
        try{
            const username = req.username;
            const passsword = req.passsword;

            

        }catch(err){
            ErrorHandling.simplifyError(err);
        }
    
    }
}