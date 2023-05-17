const form = document.getElementById('form-contatos');
const imgCel = '<img src="images/celular.png" alt="Símbolo celular" />';
const imgFixo = '<img src="images/fixo.png" alt="Símbolo telefone fixo" />';
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    //Não atualizar a página após submeter
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

//Funções ============================================================================================================================================================================

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('numero-contato');

    if (telefones.includes(inputTelContato.value)) {
        alert(`Número: ${inputTelContato.value} já foi cadastrado!`);
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(inputTelContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += `<td>${inputTelContato.value.charAt(0) == 9 ? imgCel : imgFixo}</td>`; //Operador ternário
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}