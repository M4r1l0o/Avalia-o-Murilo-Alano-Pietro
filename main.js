const campoSenha = document.querySelector("#campo-senha");
const numeroSenha = document.querySelector("#numero-senha");
const checkboxMaiusculas = document.querySelector("#usar-maiusculas");
const checkboxMinusculas = document.querySelector("#usar-minusculas");
const checkboxNumeros = document.querySelector("#usar-numeros");
const checkboxSimbolos = document.querySelector("#usar-simbolos");
const statusSenha = document.querySelector("#status-senha");

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "#$%&*+-@?!";

let tamanhoSenha = 8;

function atualizaTamanhoNaTela() {
  if (numeroSenha) {
    numeroSenha.textContent = String(tamanhoSenha);
  }
}

function temSequencia(senha) {
  if (!senha || senha.length < 5) return false;

  const texto = senha.toUpperCase();

  for (let i = 0; i <= texto.length - 5; i++) {
    const bloco = texto.slice(i, i + 5);

    if (/^[A-Z]+$/.test(bloco) || /^[0-9]+$/.test(bloco)) {
      const valores = bloco.split("").map((caractere) => {
        if (/^[0-9]$/.test(caractere)) {
          return Number(caractere);
        }
        return caractere.charCodeAt(0);
      });

      let sequencia = true;

      for (let j = 1; j < valores.length; j++) {
        const diferenca = Math.abs(valores[j] - valores[j - 1]);
        if (diferenca !== 1) {
          sequencia = false;
          break;
        }
      }

      if (sequencia) {
        return true;
      }
    }
  }

  return false;
}

function senhaAprovada(senha) {
  if (!senha || senha.length < 8) return false;
  if (temSequencia(senha)) return false;
  return true;
}

function atualizaStatusNaTela() {
  if (!campoSenha || !statusSenha) return;

  const aprovado = senhaAprovada(campoSenha.value);
  statusSenha.textContent = `Senha aprovada: ${aprovado}`;
  statusSenha.style.color = aprovado ? "green" : "red";
}

function geraSenha() {
  if (!campoSenha || !statusSenha) return false;

  let caracteres = "";

  if (checkboxMaiusculas && checkboxMaiusculas.checked) caracteres += letrasMaiusculas;
  if (checkboxMinusculas && checkboxMinusculas.checked) caracteres += letrasMinusculas;
  if (checkboxNumeros && checkboxNumeros.checked) caracteres += numeros;
  if (checkboxSimbolos && checkboxSimbolos.checked) caracteres += simbolos;

  if (caracteres.length === 0) {
    campoSenha.value = "";
    atualizaStatusNaTela();
    return false;
  }

  let senha = "";
  let tentativas = 0;

  do {
    senha = "";

    for (let i = 0; i < tamanhoSenha; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[indiceAleatorio];
    }

    tentativas++;
  } while (!senhaAprovada(senha) && tentativas < 200);

  campoSenha.value = senha;
  atualizaStatusNaTela();

  return senhaAprovada(senha);
}

if (checkboxMaiusculas && checkboxMinusculas && checkboxNumeros && checkboxSimbolos) {
  [checkboxMaiusculas, checkboxMinusculas, checkboxNumeros, checkboxSimbolos].forEach((checkbox) => {
    checkbox.addEventListener("change", geraSenha);
  });
}

function diminuiTamanho() {
  if (tamanhoSenha > 1) {
    tamanhoSenha--;
  }

  atualizaTamanhoNaTela();
  geraSenha();
}

function aumentaTamanho() {
  if (tamanhoSenha < 20) {
    tamanhoSenha++;
  }

  atualizaTamanhoNaTela();
  geraSenha();
}

atualizaTamanhoNaTela();
geraSenha();