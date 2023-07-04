
alert("hola...");
/* comentario de varias lineas */

var codigo;
let nombre;

const dato="2023";

var edad;
edad=10

if(edad > 18){
    alert ("mayor de edad")
}
else{
    alert("noo");
}

var contador;

for(contador=0; contador < 20; contador++){
console.log(contador);
}

function f_suma(n1, n2){
    var suma;
    suma = n1 +n2;
    return suma;
}

var resultado;
resultado = f_suma(20,5);

alert("la suma es: " + resultado);

function respuesta (){
    
    var  numero= docuemnt-getElementById("numero").value;

    document.getElementById("resultado").innerHTML = "<h1 style='color: red >" + numero + "</h1>";


}