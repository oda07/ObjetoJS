class Pessoa {
    constructor() {
        this.id = 1;
        this.arrPessoa = [];
        this.editId = null;
    }

    registrar() {
        let usuario = this.verificarCampos();
        if (usuario && this.editId == null) {
            this.arrPessoa.push(usuario);
            this.id++;

            let input = document.getElementsByClassName("input");
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }

            this.listar();
        }
        else {
            this.update(this.editId, usuario);
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
            iconUpdate.setAttribute('onclick', `pessoa.updateLista(${td_id.innerText})`)

        }
    }

    deletar(id) {
        let tbody = document.getElementById('tbody');

        for (let i = 0; i < this.arrPessoa.length; i++) {
            if (this.arrPessoa[i].id == id) {
                this.arrPessoa.splice(i, 1);
                tbody.deleteRow(i);
            }

        }
    }

    updateLista(id) {
        let btnSalvar = document.getElementById("salvar");
        let inputs = document.querySelectorAll(".input");
        this.editId = id;

        btnSalvar.innerText = 'Update';

        for (let i = 0; i < this.arrPessoa.length; i++) {
            if (this.arrPessoa[i].id == id) {
                inputs[0].value = this.arrPessoa[i].nome;
                inputs[1].value = this.arrPessoa[i].email;
                inputs[2].value = this.arrPessoa[i].cidade;
            }
        }
    }

    update(id, usuario) {
        for (let i = 0; i < this.arrPessoa.length; i++) {
            if(this.arrPessoa[i].id == id){
                this.arrPessoa[i].nome = usuario.nome;
                this.arrPessoa[i].email = usuario.email;
                this.arrPessoa[i].cidade = usuario.cidade;
            }
            this.listar();
            this.cancelar();
        }
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

    cancelar() {
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('salvar').innerText = 'Salvar';

        this.editId = null;
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