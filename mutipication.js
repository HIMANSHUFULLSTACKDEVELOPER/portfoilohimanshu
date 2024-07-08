 // JavaScript display text
function displayText() {
    let x = document.getElementById("input").value;
    let output = "";
    let y = 1;
    while (y <= 15) {
        result = y * x;
        output = output + x + "*" + y + "=" + result;
        output = output + "<br>";
        y = y + 1;

    }
     // JavaScript showing the display
    document.getElementById("display").innerHTML = output;
}
 // JavaScript clear text
function clearText() {
    document.getElementById("display").innerHTML = "";
}