function acontece(alunos, minimo) {
  var somaAlunos = 0;
  for (i = 0; i < alunos.length; i++) {
    if (alunos[i] <= 0) {
      somaAlunos++;
    }
  }
  return somaAlunos >= minimo;
}

var alunosDaSegunda = [10, -5, 3, 0];
var alunosDaTerca = [10, 3, 0];
var alunosDaQuarta = [10, -5, 3];

console.log(acontece(alunosDaSegunda, 2));
// primeira parte ok

function aberturas(dias, min) {
  var arrayDia = [];
  for (i = 0; i < dias.length; i++) {
    arrayDia = dias[i];
    acontece(arrayDia, min);
  }
  return;
}

console.log(aberturas([alunosDaSegunda, alunosDaTerca, alunosDaQuarta], 2));
