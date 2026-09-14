const campoSenha =
   document.querySelector("#campo-senha");

const numeroSenha =
   document.querySelector("#numero-senha");

const letrasMaiusculas =
   "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const simbolos =
   "#@%-+?&!*$";

const letrasMinusculas =
   "abcdefghijklmnopqrstuvwxyz";

const checkbox =
   document.querySelectorAll('input[type="checkbox"]');

 let tamanhoSenha = 8;

 geraSenha();

 function geraSenha() {

 let senha = "";

        if(checkbox[0].checked) {
            senha + = letrasMaiusculas [
                Math.floor(Math.random() * letrasMaiusculas.length)
            ];
        }
        if(checkbox[1].checked) {
            senha + = letrasMinusculas [
                Math.floor(Math.random() * letrasMinusculas.length)
            ];
        }
        if(checkbox[2].checked) {
            senha + = simbolos [
                Math.floor(Math.random() * simbolos.length)
            ];
        }
        if(checkbox[3].checked) {
            senha + = numeroSenha [
                Math.floor(Math.random() * numeroSenha.length)
            ];
        }

 for (let i = 0; i < tamanhoSenha; i++) {

 let numeroAleatorio =

 Math.random() * letrasMaiusculas.length;
 numeroAleatorio =

 Math.floor(numeroAleatorio);
 senha +

 letrasMaiusculas[numeroAleatorio];
}

campoSenha.value = senha;
}

function diminuiTamanho() {
 if (tamanhoSenha > 1) {
 tamanhoSenha--;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}

function aumentaTamanho() {
if (tamanhoSenha < 20) {
tamanhoSenha++;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}
