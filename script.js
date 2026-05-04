
document.addEventListener('DOMContentLoaded', () => {
    console.log("Tiendas TEC - Huancayo: Proyecto cargado correctamente.");

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
