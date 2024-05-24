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

/*Funciones matemáticas*/
function sqrt(){
    input[0].value = Math.sqrt(input[0].value);
}
function cbrt(){
    input[0].value = Math.cbrt(input[0].value);
}


/*Funciones trigonométricas*/
function sen(){
    input[0].value = Math.sin(input[0].value);
}
function cos(){
    input[0].value= Math.cos(input[0].value);
}
function tan(){
    input[0].value= Math.tan(input[0].value);
}

/*Funciones Algorítmicas*/
function log(){
    input[0].value = Math.log10(input[0].value);
}
function ln(){
    input[0].value = Math.log(input[0].value);
}