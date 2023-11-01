window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY >= 200) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
});

function adjustNav() {
    var winWidth = window.innerWidth;
    var dropdowns = document.querySelectorAll('.dropdown');

    if (winWidth >= 768) {
        dropdowns.forEach(function (dropdown) {
            dropdown.addEventListener('mouseenter', function () {
                dropdown.classList.add('show');
                var menu = dropdown.querySelector('.dropdown-menu');
                if (menu) {
                    menu.classList.add('show');
                }
            });

            dropdown.addEventListener('mouseleave', function () {
                dropdown.classList.remove('show');
                var menu = dropdown.querySelector('.dropdown-menu');
                if (menu) {
                    menu.classList.remove('show');
                }
            });
        });
    } else {
        dropdowns.forEach(function (dropdown) {
            dropdown.removeEventListener('mouseenter', null);
            dropdown.removeEventListener('mouseleave', null);
        });
    }
}

window.addEventListener('resize', adjustNav);
adjustNav();
