const radioInputs = document.querySelectorAll('input[type="radio"]');


function changeActiveItem(nextIndex) {

    radioInputs.forEach(input => input.checked = false);

    radioInputs[nextIndex].checked = true;
}


function autoLoopCarousel() {

    const activeItem = document.querySelector('input[type="radio"]:checked');

    const currentIndex = Array.from(radioInputs).indexOf(activeItem);


    const nextIndex = (currentIndex + 1) % radioInputs.length;


    changeActiveItem(nextIndex);
}

setInterval(autoLoopCarousel, 4000);


let isRotated = false;

function rotateButton(button) {
    isRotated = !isRotated;

    if (isRotated) {
        button.style.transform = 'rotate(180deg)';
    } else {
        button.style.transform = 'rotate(0deg)';
    }

    const panel = button.parentElement.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
}