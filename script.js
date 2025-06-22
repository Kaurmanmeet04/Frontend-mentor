document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      const parent = this.parentElement;
      const menu = parent.querySelector('.dropdown-menu');

      if (window.innerWidth < 992) {
        e.preventDefault();
        menu.classList.toggle('show');
      }
    });
  });

  const navLinks = document.querySelectorAll('.offcanvas .nav-link');
  const offcanvasEl = document.getElementById('mainNavbar');
  const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        bsOffcanvas.hide();
      }
    });
  });

  const toggleDark = document.getElementById('darkModeToggle');
  if (toggleDark) {
    toggleDark.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
});
