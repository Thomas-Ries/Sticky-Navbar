function stickyNav() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0)
};

window.addEventListener('scroll', stickyNav);
