function add(char) {
    var display = document.getElementById("display");
    display.value += char;
}

function reset() {
    document.getElementById("display").value = "";
    document.getElementById("result").value = "";
}

function cal() {
    var display = document.getElementById("display");
    var result = eval(display.value);

    document.getElementById("result").value = result;
    display.value += "=" + result + "\n";
}