import { Curso } from './Curso';

export class Instituicao{

    constructor(id, nome, contato, email, endereco, /*imagem*/ curso){
        if(typeof nome === 'string' && nome.trim().length > 0)
            this.nome = nome;

        if(typeof contato === 'string' && contato.trim().length > 0)
            this.contato = contato;

        if(typeof email === 'string' && email.trim().length > 0)
            this.email = email;

        if(typeof endereco === 'string' && endereco.trim().length > 0)
            this.endereco = endereco;

       // if(typeof imagem === 'string' && imagem.trim().length > 0)
           // this.imagem = new Blob([imageData], { type: "image/png" });

        this.curso = [];
    }

    getId(){
        return this.id;
    }

    getNome(){
        return this.nome;
    }

    setNome(nv){
        this.nome = nv;
    }

    getDescricao(){
        return this.descricao;
    }

    setDescricao(nv){
        this.descricao = nv;
    }

    getModalidade(){
        return this.modalidade;
    }

    setModalidade(nv){
        this.modalidade = nv;
    }

    getGratuitoPago(){
        return this.gratuitoPago;
    }

    setGratuitoPago(nv){
        this.gratuitoPago = nv;
    }

    //getImagem(){
    //    return this.imagem;
    // }

    //setImagem(nv){
     //   this.imagem = nv;
   // }

    getIdInstituicao(){
        return this.idInstituicao;
    }

    addCurso(nc){
        nc = new Curso();
        this.curso.push(nc);
    }

    /*removeCurso(this.curso.forEach(element => {
        
    });){

    }*/
}

