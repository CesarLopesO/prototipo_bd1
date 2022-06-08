const BASE_URL = "https://trabalho-banco-de-dados.herokuapp.com"
const headers = new Headers();
headers.append("Content-Type", "application/json");

const CadastroMembro = {
    init: () => {
        document.querySelector("#membro-form").addEventListener("submit", ev => {
            const rg = document.querySelector('input[name="rg"]').value;
            const nome = document.querySelector('input[name="nome"]').value;
            const atleticaCnpj = document.querySelector('input[name="atleticaCnpj"]').value;

            if (!(rg && nome && atleticaCnpj)) {
                ev.preventDefault();
                alert("Você precisa preencher todos os campos!");
            }

            CadastroMembro.registerMembro({
                rg,
                nome,
                atleticaCnpj,
            })
        })
    },
    registerMembro: data => {
        fetch(BASE_URL + "/membro/", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
            mode: 'no-cors'
        })
            .then(response => response.text())
            .then(({ id }) => {
                if (id) {
                    alert("Membro inserido")
                } else {
                    alert("Falha na requisição!");
                }
            })
            .catch(e => console.error(e))
    }
}

CadastroMembro.init();