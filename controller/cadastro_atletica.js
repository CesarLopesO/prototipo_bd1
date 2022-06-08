const BASE_URL = "https://trabalho-banco-de-dados.herokuapp.com"
const headers = new Headers();
headers.append("Content-Type", "application/json");


const CadastroAtletico = {
    init: () => {
        document.querySelector("#atletica-form").addEventListener("submit", ev => {
            const nome = document.querySelector('input[name="nome"]').value;
            const cnpj = document.querySelector('input[name="cnpj"]').value;
            const faculdade = document.querySelector('input[name="faculdade"]').value;
            const cidade = document.querySelector('input[name="cidade"]').value;
            
            if(!(nome && cnpj && faculdade && cidade)) {
                ev.preventDefault();
                alert("Você precisa preencher todos os campos!");
            }

            CadastroAtletico.registerAtletica({
                nome,
                cnpj,
                faculdade,
                cidade
            })
        })
    },
    registerAtletica: data => {
        fetch(BASE_URL + "/atletica/", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
            mode: 'no-cors'
        })
        .then(response => response.text())
        .then(({id}) => {
            if(id) {
                alert("Atletica inserido")
            } else {
                alert("Falha na requisição!");
            }
        })
        .catch(e => console.error(e))
    }
}

CadastroAtletico.init();