function checkEmail(str) {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
        // ( /^[A-Za-z0-9]+[A-Za-z0-9]*@gmail(\.com)/)
        //      | (/^[A-Za-z0-9]+[A-Za-z0-9]*@yahoo(\.com)/)
        //      | (/^[A-Za-z0-9]+[A-Za-z0-9]*@hotmail(\.com)/);
    if (regexp.test(str)) {
        alert("Thank You !");
    } else {
        alert(" Error!!! Please Try Again !!!");
    }
}