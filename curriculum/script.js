const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
const sectionId = link.getAttribute('href');
const section = document.querySelector(sectionId);
section.scrollIntoView({ behavior: 'smooth' });
});
});