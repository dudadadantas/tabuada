function mostrarTabuada(){
  //cria referencia aos elementos da página
  let inNumero = document.getElementById("inNumero");
  let outTabuada = document.getElementById("outTabuada");

  //converter conteúdo do campo innumero
  let numero = Number(inNumero.value)

  //validar o número
  if (numero == 0 || isNaN(numero)){
    alert("Informe um número válido, bobão >n<");
    inNumero.focus();
    return;
  }
  //cria uma váriavel do tipo string, que irá concatenar a resposta let resposta = "";
  let resposta = "";

  //cria um laço de repetição
  for (let i = 1; i<=10; i++){
    //a variavel respostos vai acumulando os novos conteúdos
    resposta = resposta + numero + " X " + i + "=" + numero * i + "\n";

  }
  //o conteúdo da tag pre é alterado para exibir a tabuada do num 

  outTabuada.textContent = resposta; 
}
//cria referência ao botão e após associa function ao evento click
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarTabuada);