export class Admin{
    constructor(userName, password, session){
        this.userNamae = userName;
        this.password = password;
        this.session = session;
    }

    getUserName(){
        return this.getUserName;
    }

    setUserName(newUserName){
        this.userName = newUserName;
    }

    getPassword(){
        return this.password;
    }

    setPassword(newPassword){
        this.password = newPassword;
    }

    getSession(){
        return this.session;
    }

    setSession(newSession){
        this.session = newSession;
    }
}