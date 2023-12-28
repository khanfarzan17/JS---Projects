let pressedKeys = '';

document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Check if the pressed key is a space bar
    if (key === ' ') {
        pressedKeys += 'space Bar is being Pressed  '; // Use an underscore (or any other visible character) for space
    } else {
        pressedKeys =key;
    }

    displayKeyPressed(pressedKeys);
});

function displayKeyPressed(keys) {
    const displayKeyElement = document.getElementById('display-key');
    displayKeyElement.textContent = keys;
}
