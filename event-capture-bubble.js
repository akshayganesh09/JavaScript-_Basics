const button = document.getElementById("button-click");
const child = document.getElementById("child");
const parent = document.getElementById("parent");
const grand = document.getElementById("grand-parent");

// Event Capturing phase
child.addEventListener('click', function() {
     console.log('Child — CAPTURING');
}, { capture: true });

parent.addEventListener('click', function() {
     console.log('Parent — CAPTURING');
}, { capture: true });

grand.addEventListener('click', function(e) {
     console.log('Grand-Parent — CAPTURING');
}, { capture: true });


// Event Targetting phase
button.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("Button clicked!!")
});


//Event Bubbling phase
child.addEventListener('click', function() {
     console.log('Child — Bubbling...');
}, { capture: false });

parent.addEventListener('click', function() {
     console.log('Parent — Bubbling...');
}, { capture: false });

grand.addEventListener('click', function() {
     console.log('Grand-Parent — Bubbling...');
}, { capture: false });
