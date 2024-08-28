import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Admin } from "../../Model/Admin.js"
import { ErrorHandling } from "../../Error/ErrorHandling.js";
import { AuthenticationError } from "../../Error/InternalError.js";
import { AdminGetDAO } from "../../DataBase/DAO/Admin/AdminGetDAO.js"

dotenv.config();
const Get = new AdminGetDAO();

export class AdminService {
    constructor() {
    }

    async getAdminInfo(name, reqPassword) {
        try {
            const userInfo = await Get.getUser(name);

            if (userInfo !== null) {
                const { id, userName, password } = userInfo;
                const user = new Admin(id, userName);
                const verifyPassword = await this.verifyPassword(reqPassword, password);

                if (verifyPassword) {
                    const payload = { id: user.getId(), username: user.getUserName() };
                    const token = this.createToken(payload);
                    return { user: user.adminJson(), token: token };
                }
                else
                    return null
            }
            else
                return null;

        } catch (err) {
            ErrorHandling.HandleError(err);
            return null;
        }
    }

    async verifyPassword(password, hashPassword) {
        try {
            if (await bcrypt.compare(password, hashPassword))
                return true;
            else
                throw new AuthenticationError("Senha incorreta.");

        } catch (err) {
            ErrorHandling.HandleError(err);
            return false;
        }
    }

    createToken(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    }
}