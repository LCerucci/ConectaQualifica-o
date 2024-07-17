import { ErrorHandling } from "../../../Error/ErrorHandling.js";
import { SQLError } from "../../../Error/InternalError.js";
import { connectionPool } from "../../DBConnection.js";

export class AdminGetDAO {
    constructor() {
    }

    async getUsername(username) {
        try {
            const [name] = await connectionPool.execute(`SELECT userName from Admin WHERE userName=?`, [username]);

            if (name.length > 0)
                return name;
            else
                throw new SQLError("Invalid Username!");
            
        } catch (err) {
            ErrorHandling(err);
            return null;
        }
    }

    async getPassword(username) {
        try {
            const [hashPassword] = await connectionPool.execute(`SELECT password from Admin WHERE userName=?`, [username]);

            if (hashPassword.length > 0)
                return hashPassword;
            else
                throw new SQLError("Invalid Password!");

        } catch (err) {
            ErrorHandling(err);
            return null;
        }
    }

}