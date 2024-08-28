import * as InternalError from "../Error/InternalError.js";

export class ErrorHandling extends Error {
    static HandleError(err, req, res) {
        if (this.handleAuthenticationError(err, req, res)) return;
        if (this.handleValidationError(err, req, res)) return;
        if (this.handleSQLError(err)) return;
        this.simplifyError(err);
    }

    static handleSQLError(err) {
        if (err instanceof InternalError.SQLError) {
            console.log(`${err.message}, follow: ${err.stack}. The value may not exist.`);
            return true;
        }
        return false;
    }

    static handleAuthenticationError(err, _req, res) {
        if (err instanceof InternalError.AuthenticationError) {
            console.log(`${err.message}, follow: ${err.stack}`);
            res.status(401).send('Unauthorized');
            return true;
        }
        return false;
    }

    static handleValidationError(err, _req, res) {
        if (err instanceof InternalError.ValidationError) {
            console.log(`${err.message}, follow: ${err.stack}`);
            res.status(400).json({message: 'Alguns dados podem estar faltando, verifique os campos e tente novamente.'});
            return true;
        }
        return false;
    }

    static simplifyError(err) {
        console.log(`Something went wrong. ${err.stack}`);
    }
}