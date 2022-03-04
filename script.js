arrPessoa = [];

class Pessoa {
    constructor(nome, email, cidade){
        this.nome = nome;
        this.email = email;
        this.cidade = cidade;
    }

    salvar(){
        let a = document.getElementById('nome').value;
        console.log(a);
    }
}

let pessoa = new Pessoa()


let salvar = document.getElementById('salvar');
salvar.addEventListener('click', ()=>{
    pessoa.salvar();
})