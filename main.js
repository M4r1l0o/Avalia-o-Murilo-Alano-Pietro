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

 let tamanhoSenha = 8;

 geraSenha();

 function geraSenha() {

 let senha = "";

        if(checkbox[0].checked) {
            senha + = letrasMaiusculas [
                match.floor(match.random() letrasMaiusculas.lenght)
            ];
        }
        if(checkbox[1].checked) {
            senha + = letrasMinusculas [
                match.floor(match.random() letrasMinusculas.lenght)
            ];
        }
        if(checkbox[2].checked) {
            senha + = simbolos [
                match.floor(match.random() simbolos.lenght)
            ];
        }
        if(checkbox[3].checked) {
            senha + = numeroSenha [
                match.floor(match.random() numeroSenha.lenght)
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
