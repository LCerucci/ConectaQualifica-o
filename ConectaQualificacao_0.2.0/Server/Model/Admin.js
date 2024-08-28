export class Admin {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    getUserName() {
        return this.userName;
    }

    setUserName(newUsername) {
        this.userName = newUsername;
    }

    getId() {
        return this.id;
    }

    adminJson() {
        return {
            id: this.id,
            username: this.username
        };
    }
}