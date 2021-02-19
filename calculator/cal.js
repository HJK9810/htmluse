var numClick = true;

function add(char) {

    if(numClick == false) {
        if(isNaN(char) == true) {
        } else {
            document.getElementById("display").value += char;
        }
    } else {
        document.getElementById("display").value += char;
    }

    if(isNaN(char) == true) {
        numClick = false;
    } else {
        numClick = true;
    }
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