document.addEventListener("DOMContentLoaded", function() {
    const verMasBtn = document.getElementById('verMasBtn');
    const hiddenItems = document.querySelectorAll('.brand-item.hidden');

    verMasBtn.addEventListener('click', function() {
        hiddenItems.forEach(item => {
            item.classList.toggle('hidden');
        });

        // Cambiar texto del botón
        if (verMasBtn.innerText === 'Ver más') {
            verMasBtn.innerText = 'Ver menos';
        } else {
            verMasBtn.innerText = 'Ver más';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const socialLinks = document.querySelector('.social-links');

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active'); // Activar/desactivar la clase 'active' para el botón del menú
        navLinks.classList.toggle('active'); // Mostrar/ocultar enlaces de navegación
        socialLinks.classList.toggle('active'); // Mostrar/ocultar enlaces de redes sociales
    });
});

