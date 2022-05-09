function sumaNumeros() {
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value ;
var resultado=document.getElementById("resultado");
var suma=parseInt(num1)+parseInt(num2);

resultado.innerHTML="Resultado:"+suma;
}
function restaNumeros() {
   var resta=document.getElementById("numero1").value-document.getElementById("numero2").value;
   document.getElementById("resultado").innerHTML="Resultado:"+resta;
}
function multinumeros(){
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value ;
var resultado=document.getElementById("resultado");
var multiplicación=num1*num2;

resultado.innerHTML="Resultado:"+multiplicación;
}
function dividenumeros(){
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value ;
var resultado=document.getElementById("resultado");
var divide=num1/num2;
resultado.innerHTML="Resultado:"+divide;
} 