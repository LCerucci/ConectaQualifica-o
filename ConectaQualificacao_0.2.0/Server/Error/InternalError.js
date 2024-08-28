export class SQLError extends Error{
    constructor(message, httpStatus = 500){
        super(message);
        this.name = "SQLError";
        this.httpStatus = httpStatus;
        
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, this.constructor);
    }
}

export class ValidationError extends Error{
    constructor(message, httpStatus = 500){
        super(message);
        this.name = "ValidationError";
        this.httpStatus = httpStatus;

        if (Error.captureStackTrace)
            Error.captureStackTrace(this, this.constructor);
    }
}

export class AuthenticationError extends Error{
    constructor(message, httpStatus = 500){
        super(message);
        this.name = "AuthenticationError";
        this.httpStatus = httpStatus;

        if (Error.captureStackTrace) 
            Error.captureStackTrace(this, this.constructor);
    }
}