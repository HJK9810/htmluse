function percent() {
    var body = document.getElementById("body");
    var son = document.getElementById("son");
    var sum = 0;

    sum = son / body * 100;
    document.getElementById("percent").value = sum;
}