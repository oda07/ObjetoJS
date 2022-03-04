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

            return this.arrPessoa;
        }
    }

    verificarCampos() {
        let usuario = {};
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
    console.log(pessoa.registrar());
})