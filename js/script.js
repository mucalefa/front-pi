document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector("#navbarNav");
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener("click", function() {
            navbarCollapse.classList.toggle("show");
        });
    }
});
