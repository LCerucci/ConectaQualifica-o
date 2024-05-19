export class Curso{

    constructor(id, nome, descricao, modalidade,gratuitoPago, /*imagem,*/ idInstituicao){
        if(typeof nome === 'string' && nome.trim().length > 0)
            this.nome = nome;

        if(typeof descricao === 'string' && descricao.trim().length > 0)
            this.descricao = descricao;

        if(typeof modalidade === 'string' && modalidade.trim().length > 0)
            this.modalidade = modalidade;

        if(typeof gratuitoPago === 'string' && gratuitoPago.trim().length > 0)
            this.gratuitoPago = gratuitoPago;

       // if(typeof imagem === 'string' && imagem.trim().length > 0)
           // this.imagem = new Blob([imageData], { type: "image/png" });
       
        if(typeof idInstituicao === 'number' && ideInstituicao != null)
            this.idInstituicao = idInstituicao;
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
}

