function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navbar = document.querySelector('.navbar');
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
}