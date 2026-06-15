function debounce (searchFunction, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            searchFunction.apply(null, args);
        }, delay)
    }
}

function handleApiCall (event) {
    let value = event.target.value;
    fetch("https://api/user-search", value);
}


const handleSearch = debounce(handleApiCall, 500);
//It will be like... 
// when JS executes this code, debounce function will be executed executed only once and an anonymous function is returned.
// And when ever user press a new key this returned function is executed.

// timer -- due to closure anonymous function remembers this variable and its current value.
// {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//         searchFunction.apply(null, args);
//     }, 500);
// }