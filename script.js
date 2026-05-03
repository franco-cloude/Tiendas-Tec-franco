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

/* ANIMACIONES AL HACER SCROLL */
const secciones = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    secciones.forEach(sec => {
        const pos = sec.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            sec.classList.add("visible");
        }
    });
});
