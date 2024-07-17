export class Admin{
    constructor(username, password){
        this.username = username;
        this.password = password;
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

    adminJson(){
        return adminInfo = {
            username : this.username,
            password: this.password
        }
    }
}