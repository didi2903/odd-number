document.querySelector("button").addEventListener("click", popup);


function popup() {
    let input = prompt("enter a string of numbers separated by a comma");
    let array = [];
    
    array = input.split(",");

    for(i=0; i<array.length; i++) {
        if (array[i] % 2) {
            console.log(array[i]);
        }
    }
}