const button = document.getElementById("button-click");

// button.addEventListener('click', function () {
//     console.log('Normal Function "this":', this);
//     this.style.backgroundColor = 'red';
// });

// button.addEventListener('click', () => {
//     console.log('Arrow Function "this":', this);
//     this.style.backgroundColor = 'red'; // Will be undefined.
// });

// Function De-Coupling...

const clickHandler = function () {
    console.log('de-coupled Normal Function "this":');
};

button.addEventListener('click', clickHandler);

myHandler();