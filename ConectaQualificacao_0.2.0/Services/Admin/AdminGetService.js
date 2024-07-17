import { ErrorHandling } from "../../Error/ErrorHandling.js";
import { AdminGetDAO } from "../../DataBase/DAO/Admin/AdminGetDAO.js"
import { Admin } from "../../Model/Admin.js"

const Get = new AdminGetDAO();

export class AdminService{
    constructor(){
    }

    async getAdminInfo(username){
        try{
            let promises = [
                Get.getUsername(username),
                Get.getPassword(username)
            ]

            const [name, passsword] = await Promise.all(promises);
            
            if(name !== null && passsword !== null){
                const user = new Admin(name, passsword);
                return user.adminJson();
            }
            else
                return null;

        }catch(err){
            ErrorHandling.simplifyError(err);
        }
    }
}