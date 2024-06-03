document.addEventListener('DOMContentLoaded', () => {
    const flyingJoke = document.querySelector('.flying-joke');
    const flashingText = document.querySelector('.flashing-text');
    const wavingJesus = document.querySelector('.waving-jesus');

    flyingJoke.addEventListener('animationend', () => {
        setTimeout(() => {
            flashingText.style.display = 'block';
            wavingJesus.style.display = 'block';
        }, 4000); // 4 seconds delay
    });
});
