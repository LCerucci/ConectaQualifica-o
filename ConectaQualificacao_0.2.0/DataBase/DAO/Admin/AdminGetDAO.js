import { ErrorHandling } from "../../../Error/ErrorHandling.js";
import { SQLError } from "../../../Error/InternalError.js";
import { connectionPool } from "../../DBConnection.js";

const SQL = 'SELECT id, userName, password from Admin WHERE userName=?';

export class AdminGetDAO {
    constructor() {
    }

    async getUser(userName) {
        try {
            const [userInfo] = await connectionPool.execute(SQL, [userName]);
    
            if (userInfo.length > 0)
                return userInfo[0];
            else
                throw new SQLError("User not found!");
            
        } catch (err) {
            ErrorHandling.HandleError(err);
            return null;
        }
    }
}