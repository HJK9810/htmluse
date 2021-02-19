function percent() {
    var body = document.getElementById("body");
    var son = document.getElementById("son");
    var sum = son / body * 100;

    document.getElementById("percent").value = sum;
}