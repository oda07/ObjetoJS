class Pessoa {
    constructor() {
        this.id = localStorage.length + 1;
        this.arrPessoa = [];
    }

    registrar() {
        let usuario = this.verificarCampos();
        if (usuario) {
            this.arrPessoa = [];
            this.arrPessoa.push(usuario);
            localStorage.setItem(this.id, JSON.stringify(this.arrPessoa));
            this.id++;

            let input = document.getElementsByClassName("input");
            // for (let i = 0; i < input.length; i++) {
            //     input[i].value = "";
            // }

            this.listar();
        }
    }

    listar() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 1; i <= localStorage.length; i++) {
            if(JSON.parse(localStorage.getItem([i]))[0] == null || JSON.parse(localStorage.getItem([i]))[0] == false){
                i++;
                return;
            }
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_email = tr.insertCell();
            let td_cidade = tr.insertCell();

            td_id.innerText = JSON.parse(localStorage.getItem([i]))[0].id;
            td_nome.innerText = JSON.parse(localStorage.getItem([i]))[0].nome;
            td_email.innerText = JSON.parse(localStorage.getItem([i]))[0].email;
            td_cidade.innerText = JSON.parse(localStorage.getItem([i]))[0].cidade;
        }
    }

    limpar() {
        localStorage.clear();
        location.reload();
    }

    verificarCampos() {
        let usuario = {};
        usuario.id = this.id;
        usuario.nome = document.getElementById('nome').value;
        usuario.email = document.getElementById('email').value;
        usuario.cidade = document.getElementById('cidade').value;
        if (usuario.nome == "" || usuario.email == "" || usuario.cidade == "") {
            alert("Para criar um registro preencha todos os campos!")
            return false;
        }
        else {
            return usuario;
        }
    }
}

var pessoa = new Pessoa()
pessoa.listar();

var salvar = document.getElementById('salvar');
salvar.addEventListener('click', () => {
    pessoa.registrar();
})

var limpar = document.getElementById('limpar');
limpar.addEventListener('click', () => {
    pessoa.limpar();
})