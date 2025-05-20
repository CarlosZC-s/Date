function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const noButton = document.getElementById('noButton');

    // Tamaño de la ventana y del botón
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonRect = noButton.getBoundingClientRect();

    // Generar nueva posición aleatoria dentro de la ventana
    const maxX = windowWidth - buttonRect.width;
    const maxY = windowHeight - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.transition = 'transform 0.3s ease, left 0.3s ease, top 0.3s ease';
    noButton.style.transform = 'scale(1.2) rotate(10deg)';

    setTimeout(() => {
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
        noButton.style.transform = 'scale(1) rotate(0deg)';
    }, 50);
}

// También hace que el botón se mueva al hacer click
document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    noButton.addEventListener('click', moveButton);
});
