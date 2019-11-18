function enterConvert(inputC) {
    let result = document.getElementById("result");
    let rec = new MyConvert(inputC);
    result.innerText = rec.display();
}