function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');

    // Tamaño del contenedor y botón
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    // Generar nueva posición aleatoria dentro del contenedor
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// También hace que el botón se mueva al hacer click
document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    noButton.addEventListener('click', moveButton);
});
