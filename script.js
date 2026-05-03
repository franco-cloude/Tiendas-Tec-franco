function validarFormulario(){
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if(nombre === "" || correo === "" || mensaje === ""){
        alert("⚠ Completa todos los campos");
        return false;
    }

    alert("✅ Mensaje enviado correctamente");
    return true;
}
