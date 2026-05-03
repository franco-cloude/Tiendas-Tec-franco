function validarFormulario(){
let n=document.getElementById("nombre").value;
let c=document.getElementById("correo").value;
let m=document.getElementById("mensaje").value;
if(n==""||c==""||m==""){
alert("Completa todos los campos");
return false;
}
alert("Enviado correctamente");
return true;
}
