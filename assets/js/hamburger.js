// File: assets/js/hamburger.js
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('active');
        });

        // Menutup menu saat mengklik di luar
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            }
        });
    }
}

// Jalankan setelah DOM loaded
document.addEventListener('DOMContentLoaded', initHamburgerMenu);