document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');

    // Event listener untuk tombol menu toggle
    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});
