function toggleCase(header) {
    const caseCard = header.closest('.case-card');

    document.querySelectorAll('.case-card').forEach(card => {
        if (card !== caseCard) {
            card.classList.remove('active');
        }
    });

    caseCard.classList.toggle('active');

    if (caseCard.classList.contains('active')) {
        setTimeout(() => {
            caseCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}


// Close cases when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.case-card')) {
        document.querySelectorAll('.case-card').forEach(card => {
            card.classList.remove('active');
        });
    }
});

// Initialize animations for elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});