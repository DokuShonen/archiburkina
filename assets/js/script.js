// assets/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Animation du menu burger ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animation des liens
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animation du Burger
        burger.classList.toggle('toggle');
    });

    // --- Filtre de la galerie sur la page oeuvres.html ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Gérer le bouton actif
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    item.style.display = 'none'; // Cacher tous les items
                    if (item.classList.contains(filter) || filter === 'all') {
                        item.style.display = 'block'; // Afficher seulement les items filtrés
                    }
                });
            });
        });
    }
    
    // --- Défilement fluide (si nécessaire, le CSS `scroll-behavior: smooth` est souvent suffisant) ---
    // Exemple de défilement vers une ancre si vous en ajoutez
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});

// Animation pour les liens du menu
const navLinkFade = `
@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}`;

// Ajouter les keyframes au style du document
let styleSheet = document.styleSheets[0];
if (styleSheet) {
   styleSheet.insertRule(navLinkFade, styleSheet.cssRules.length);
}