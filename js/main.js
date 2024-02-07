function calcular(){
    var numero1 = Number(document.getElementById("1").value);
    var numero2 = Number(document.getElementById("2").value);
    var operacao = document.getElementById("oper").value;
    var resultado = document.querySelector("h2");

    if(operacao == "somar"){
        resultado.innerHTML = numero1 + numero2;
    } 
    else if(operacao == "subtrair"){
        resultado.innerHTML = numero1 - numero2;
    }
    else if(operacao == "multiplicar"){
        resultado.innerHTML = numero1 * numero2;
    }
    else {
        resultado.innerHTML = numero1 / numero2;
    }
}
