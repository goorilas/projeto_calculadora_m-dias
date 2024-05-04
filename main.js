const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt= "rosto feliz" />'; 
const imgReprovado = '<img src="./images/reprovado.png" alt= "rosto triste" />';
const atividades = []; 
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

let linhas = '';

const inputNomeAtividade = document.getElementById('nome-atividade'); 
const inputNotaAtividade = document.getElementById('nota-atividade');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    adicionaLinha(); 
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    if (atividades.map(function(atividade) { return atividade.toLowerCase(); }).includes(inputNomeAtividade.value.toLowerCase())) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi cadastrada!`);
    } else {
        atividades.push(inputNomeAtividade.value); 
        notas.push(parseFloat(inputNotaAtividade.value)); 

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`; 
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; 
        linha += '<tr>';

        linhas += linha;

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
}

function atualizaTabela() {
    inputNomeAtividade.value = ''; 
    inputNotaAtividade.value = '';
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2); 
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for ( let i = 0; i < notas.length; i++) {
            somaDasNotas += notas[i];
    }
    
    return somaDasNotas / notas.length;
}