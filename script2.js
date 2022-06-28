var nome1 = prompt('Nome primera pessoa')
console.log(nome1)
var nome2 = prompt('Nome segunda pessoa')
console.log(nome2)
var nome3 = prompt('Nome terceira pessoa')
console.log(nome3)
var sobreNome1 = prompt('Sobrenome primeira pessoa')
console.log(sobreNome1)
var sobreNome2 = prompt('Sobrenome segunda pessoa')
console.log(sobreNome2)
var sobreNome3 = prompt('Sobrenome terceira pessoa')
console.log(sobreNome3)
var profissao1 = prompt('Profissao primeira pessoa')
console.log(profissao1)
var profissao2 = prompt('Profissao segunda pessoa')
console.log(profissao2)
var profissao3 = prompt('Profissao terceira pessoa')
console.log(profissao3)
var idade1,idade2,idade3,t,mayor;
idade1 = parseInt(prompt("Idade primeira pessoa"));
idade2 = parseInt(prompt("Idade segunda pessoa"));
idade3 = parseInt(prompt("Idade terceira pessoa"));

if (idade1 > idade2) {
  t = idade1;
}else{
  t = idade2;
}

if (t > idade3) {
  mayor = t;
}else{
  mayor = idade3;
}

document.write("El mayor es "+mayor);

console.table(
  { 
    Nome: nome1,
    Sobrenome: sobreNome1,
    Idade: idade1,
    Profissao: profissao1
  }
  )  
console.table({
  Nome: nome2,
  Sobrenome: sobreNome2,
  Idade: idade2,
  Profissao: profissao2
})
    
console.table({
  Nome: nome3,
  Sobrenome: sobreNome3,
  Idade: idade3,
  Profissao: profissao3
})
  
