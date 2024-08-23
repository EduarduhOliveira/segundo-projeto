console.log(" Bem vindo heroí !!")
//se vitória fo menor do que 10 = Ferro
//se vitória for entre 11 e 20 = Bronze
//se vitória for entre 21 e 50 = Prata 
//se vitória for entre 51 e 80 = Ouro
//se vitória for entre 81 e 90 = Diamante
//se vitória for entre 91 e 100 = lendário
//se vitória for maior ou igual a 101 = Imortal

function pegarValores(){
    let vitorias = document.getElementById("numerosVitorias").value
    let derrotas = document.getElementById("numerosDerrotas").value
    num1 = Number(vitorias)
    num2 = Number(derrotas)
    let resultado = num1 - num2
   
    if(resultado < 10){
        alert(" Seu rank é Ferro")
    }
    else if(resultado >10 && resultado <=20){
        alert(" Seu rank é Bronze")
    }
    else if(resultado >20 && resultado <=50){
        alert(" Seu rank é Prata")
    }
    else if(resultado >51 && resultado <=80){
        alert(" Seu rank é Ouro")
    }
    else if(resultado >81 && resultado <=90){
        alert(" Seu rank é Diamante")
    }
    else if(resultado >91 && resultado <=100){
        alert(" Seu rank é Lendário")
    }
    else if(resultado >100){
        alert(" Seu rank é Imortal")
    }
}


