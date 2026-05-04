document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const feedback = document.getElementById('formFeedback');

    if(nombre && email && mensaje) {
        feedback.textContent = `¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente. Nos contactaremos al correo ${email} pronto.`;
        feedback.style.color = "green";
        this.reset(); // Limpia el formulario
    } else {
        feedback.textContent = "Por favor, completa todos los campos.";
        feedback.style.color = "red";
    }
});
