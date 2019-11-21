function checkAccount(str) {
    regexp = /^[_a-z0-9]{6,}$/;s
    if (regexp.test(str)) {
        alert("Thank You !!!");
    } else {
        alert("Error !!! Please Try Again");
    }
}
