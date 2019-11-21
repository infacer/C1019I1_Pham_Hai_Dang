function checkPhonenumver() {
    regexp =/^\(([0-9]{2})\)-\(([0-9]{10})\)$/;
    if (regexp.test(str)) {
        alert("True");
    } else {
        alert("False");
    }

}