const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
    } else if (currentScroll > lastScroll && currentScroll > 80) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal();

document.getElementById('year').textContent = new Date().getFullYear();