const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('main section');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(
                `.navbar a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

    });

}, {
    rootMargin: "-20% 0px -60% 0px"
});

sections.forEach(section => {
    observer.observe(section);
});