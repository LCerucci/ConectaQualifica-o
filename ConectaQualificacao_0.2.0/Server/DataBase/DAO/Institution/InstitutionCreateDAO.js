import { ErrorHandling } from "../../../Error/ErrorHandling.js";
import { connectionPool } from "../../DBConnection.js";

export class InstitutionCreateDAO {
    constructor() {
    }

    async createInstitution(name, educationLevel, contact, email, address, link) {
        try {
            const [result] = await connectionPool.execute(
                `INSERT INTO Institution(name, educationLevel, contact, email, address, link) VALUES(?,?,?,?,?,?)`, 
                [name, educationLevel, contact, email, address, link]);

            if (result.affectedRows > 0) 
                return result;
            else
                throw new SQLError("Error at CourseDAO");

        }
        catch (err) {
            ErrorHandling.ErrorHandling(err);
            return null;
        }
    }
}