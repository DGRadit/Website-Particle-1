document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const particlesContainer = document.querySelector('.particles');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;

        createParticle(e.pageX, e.pageY);
    });

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Randomize size, color, and glow
        const size = Math.random() * 15 + 5; // Random size between 5px and 20px
        const color = `hsl(${Math.random() * 360}, 100%, 70%)`; // Bright colors with full saturation
        const glow = `0 0 10px ${color}, 0 0 30px ${color}`; // Glow effect

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x - size / 2}px`;
        particle.style.top = `${y - size / 2}px`;
        particle.style.backgroundColor = color;
        particle.style.boxShadow = glow;
        particle.style.animationDuration = `${Math.random() * 0.5 + 1.5}s`;

        particlesContainer.appendChild(particle);

        // Remove particle after animation ends
        setTimeout(() => {
            particle.remove();
        }, 1800);
    }
});
