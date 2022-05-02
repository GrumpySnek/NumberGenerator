var gen_number;
const numbers_generated = [];


function generateNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    gen_number = Math.floor(Math.random() * (max - min + 1) + min);
    return gen_number;
}

document.getElementById("generate").onclick = function() {
    for (let i = 1; i <= document.getElementById("iteration").value; i++){
        generateNum(document.getElementById("min_number").value, document.getElementById("max_number").value);
        numbers_generated.push(gen_number);
        console.log(numbers_generated);
        var numbersWithSpaces = numbers_generated.join(', ');
        document.getElementById("generated").innerHTML = numbersWithSpaces;
    }
}

