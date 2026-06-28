
const campoSenha = document.getElementById("campo-senha");
const tamanhoEl = document.getElementById("tamanho");
const forcaEl = document.getElementById("forca");

const minus = document.getElementById("menos");
const mais = document.getElementById("mais");
const gerar = document.getElementById("gerar");
const copiar = document.getElementById("copiar");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

let tamanho = 12;

const setMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const setMinusculas = "abcdefghijklmnopqrstuvwxyz";
const setNumeros = "0123456789";
const setSimbolos = "!@#$%&*";

function gerarSenha() {
    let chars = "";

    if (maiusculas.checked) chars += setMaiusculas;
    if (minusculas.checked) chars += setMinusculas;
    if (numeros.checked) chars += setNumeros;
    if (simbolos.checked) chars += setSimbolos;

    if (!chars) {
        campoSenha.value = "";
        forcaEl.textContent = "Selecione opções!";
        return;
    }

    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        senha += chars[Math.floor(Math.random() * chars.length)];
    }

    campoSenha.value = senha;

    calcularForca(chars.length);
}

function calcularForca(base) {
    let entropia = tamanho * Math.log2(base);

    if (entropia < 40) {
        forcaEl.textContent = "Fraca";
    } else if (entropia < 60) {
        forcaEl.textContent = "Média";
    } else {
        forcaEl.textContent = "Forte";
    }
}

minus.onclick = () => {
    if (tamanho > 4) tamanho--;
    tamanhoEl.textContent = tamanho;
    gerarSenha();
};

mais.onclick = () => {
    if (tamanho < 32) tamanho++;
    tamanhoEl.textContent = tamanho;
    gerarSenha();
};

gerar.onclick = gerarSenha;

copiar.onclick = () => {
    navigator.clipboard.writeText(campoSenha.value);
    copiar.textContent = "Copiado!";
    setTimeout(() => copiar.textContent = "Copiar", 1500);
};

gerarSenha();
