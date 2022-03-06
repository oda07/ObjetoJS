class Pessoa {
    constructor() {
        this.id = 1;
        this.arrPessoa = [];
    }

    registrar() {
        let usuario = this.verificarCampos();
        if (usuario) {
            this.arrPessoa.push(usuario);
            this.id++;

            let input = document.getElementsByClassName("input");
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }

            this.listar();
        }
    }

    limpar() {
        location.reload();
    }

    listar() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrPessoa.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_email = tr.insertCell();
            let td_cidade = tr.insertCell();
            let td_icons = tr.insertCell();

            td_id.innerText = this.arrPessoa[i].id;
            td_nome.innerText = this.arrPessoa[i].nome;
            td_email.innerText = this.arrPessoa[i].email;
            td_cidade.innerText = this.arrPessoa[i].cidade;

            let iconDelete = document.createElement('img');
            iconDelete.src = "/icons/delete.png"
            let iconUpdate = document.createElement('img');
            iconUpdate.src = "/icons/update.png";

            td_icons.appendChild(iconDelete);
            td_icons.appendChild(iconUpdate);

            iconDelete.setAttribute('onclick', `pessoa.deletar(${td_id.innerText})`)
            iconUpdate.setAttribute('onclick', `pessoa.update(${td_id.innerText})`)

        }
    }

    deletar(id) {
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrPessoa.length; i++){
            if(this.arrPessoa[i].id == id){
                this.arrPessoa.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
    }

    update(){
        
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

var salvar = document.getElementById('salvar');
salvar.addEventListener('click', () => {
    pessoa.registrar();
})

var limpar = document.getElementById('limpar');
limpar.addEventListener('click', () => {
    pessoa.limpar();
})