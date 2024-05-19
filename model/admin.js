export class Admin{

    constructor(nome, senha, email){
        this.nome = nome;
        this.senha = senha;
        this.email = email;
    }

    getNome(){
        return this.nome;
    }

    
}