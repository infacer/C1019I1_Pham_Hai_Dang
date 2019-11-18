function drawRectangle(recLenght, recWidth) {
    let result = document.getElementById("result");
    let rec = new Rectangle(recLenght, recWidth);
    rec.draw("myCanvas");
    result.innerText = rec.display();
};