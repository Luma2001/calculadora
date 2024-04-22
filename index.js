let input =document.querySelectorAll("input");

function agregarAPantalla(numero){
    input[0].value += numero;
}

function ejecutar(){
    input[0].value = eval(input[0].value);
}

function clear(e){   
        let letter = input[0].value;
        let newletter = letter.slice(0,-1);
        input[0].value = newletter;
}
