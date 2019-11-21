function checkNameclass() {
    regexp = /^[APC][0-9]{4}[GHIKLM]/;
    if (regexp.test(str)) {
        alert("True");
    } else {
        alert("false");
    }
}