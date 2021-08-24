let nav = document.getElementById('mainNavbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}); 