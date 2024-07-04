export class SQLError extends Error{
    constructor(message){
        super(message, this.httpStatus);
        this.name = "SQLError";
        this.statusCode = statusCode;
        
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, this.constructor);
    }
}

export class ValidationError extends Error{
    constructor(message, httpStatus){
        super(message);
        this.name = "ValidationError";
        this.statusCode = statusCode;
        this.httpStatus = httpStatus;

        if (Error.captureStackTrace)
            Error.captureStackTrace(this, this.constructor);
    }
}

export class AuthenticationError extends Error{
    constructor(message, httpStatus){
        super(message);
        this.name = "AuthenticationError";
        this.statusCode = statusCode; 
        this.httpStatus = httpStatus;

        if (Error.captureStackTrace) 
            Error.captureStackTrace(this, this.constructor);
    }
}