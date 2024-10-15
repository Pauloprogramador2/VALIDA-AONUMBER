function validarCampos(){
let CampoA = document.getElementById('campoA').value;
let CampoB = document.getElementById('campoB').value;

campoA = Number('campoA');
campoB = Number('campoB');
 

if (CampoB > CampoA){

    document.getElementById('resultado').innerHTML = "O numero digitado campo B foi maior que digitado no A, por isso seu teste esta corrreto";


}
else{
    document.getElementById('resultado').innerHTML = "O numero digitado no campo A foi maior ou igual ao do campo B, por isso seu teste falhou";
}






}
