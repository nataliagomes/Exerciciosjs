 /* for é uma lista , while é quando vc não sabe quantas vezes vai se repitir para construir uma escada 
 let degrau ='#'; 
for ( let i=0; i<5; i++) 
{ 
    console.log(degrau);
    degrau+='#';
} }
function fazerEscadinha (material, degraus){
    let escada = material;
    for ( let i= 0; i<degraus; i++){
        console.log (escada);
        escada +=material; }
         function parouimpar (a) { ''
     if (a% 2==0){ 
         return 'é par';
        }
        return 'é impar';
    }
const aleatorio = function (min,max) {
    return Math.floor(Math.random()*(max-min+1)  )+ min;
}
function emprestimo (idade,valor,salario) {
    if (idade >=22 && idade <=55 && valor>1000 && salario <valor*15) {
    console.log ('Seu emprestimo foi aceito') ; 
}
 
    
      else {
      return ('Emprestimo negado');
  }
  let montante; 
      montante= valorEmprestimo * (1 + 0.08) **qtdParcelas;
      let parcelas = montante/qtdParcelas;
      console.log(``)
i= interador , da o limite 
for= laço (bloco de codigo que se repete varias vezes)
length= esta dentro da lista, limita dentro da lista 
i++ aumenta o i 

}*/
 let filmes= [
     {titulo: 'Harry Potter', classificacao :12},
     {titulo: 'As Branquelas', classificacao: 16},
     {titulo:'Rei Leão',classificacao: 10},
     {titulo: 'interestelar', classificacao: 10},
     {titulo:  'Ninja Assasino', classificacao: 18},
     {titulo: 'John Wick', classificacao: 16},
     {titulo:'velozes e Furiosos', classificacao: 14}

]

function filme(idade) {
    for(i = 0; i < filmes.length; i++) {
        if(idade>= filmes[i].classificacao){
            console.log('Você pode assistir estes filmes'+filmes[i].titulo);
        }
    }

}





 