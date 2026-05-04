// Efecto simple para la galería y navegación
document.addEventListener('DOMContentLoaded', () => {
    console.log("Tiendas TEC - Huancayo: Proyecto cargado correctamente.");

    // Smooth scroll para los enlaces de anclaje
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
