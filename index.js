let input =document.querySelectorAll("input");

/*Funciones para Pantalla*/
        function agregarAPantalla(numero){
            input[0].value += numero;
            console.log(input[0].value);
        }
        function calcular(){
            input[0].value = eval(input[0].value);
            console.log(input[0].value);
        }
        function borrarNum(){   
            console.log(input[0].value);
            let letter = input[0].value;
            let newletter = letter.slice(0,-1);
            input[0].value = newletter;
            console.log(input[0].value);
        }
    

/*Funciones matemáticas*/
        function sqrt(){
            input[0].value = Math.sqrt(input[0].value);
        }
        function psqrt(){
            input[0].value = Math.pow(input[0].value,2);
        }
        function cbrt(){
            input[0].value = Math.cbrt(input[0].value);
        }
        function pcbrt(){
            input[0].value = Math.pow(input[0].value,3);
        }
        function diezX(){
            input[0].value = Math.pow(10,input[0].value);
        }
        function eX(){
            input[0].value = Math.exp(input[0].value);
        }
        
/*Funciones Trigonométricas*/
        function sen(){
            input[0].value = Math.sin(input[0].value);
        }
        function asen(){
            input[0].value = Math.asin(input[0].value);
        }
        function cos(){
            input[0].value= Math.cos(input[0].value);
        }
        function acos(){
            input[0].value= Math.acos(input[0].value);
        }
        function tan(){
            input[0].value= Math.tan(input[0].value);
        }
        function atan(){
            input[0].value= Math.atan(input[0].value);
        }

/*Funciones Algorítmicas*/
        function log(){
            input[0].value = Math.log10(input[0].value);
        }
        function ln(){
            input[0].value = Math.log(input[0].value);
        }

/*Boton para invertir funciones*/
function inv(){
    const base = document.querySelector(".cientifica-base");
    const inv = document.querySelector(".cientifica-inv");
    base.classList.toggle("invisible");
    inv.classList.toggle("invisible");
}

