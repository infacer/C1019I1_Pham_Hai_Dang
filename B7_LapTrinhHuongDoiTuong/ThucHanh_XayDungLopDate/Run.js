function show() {
    let date = new MyDate(2, 2, 2007);
    let day = date.getDay(); // 2

    let month = date.getMonth(); // 2

    let year = date.getYear(); // 2007
    alert(day + "/" + month + "/" + year);
    let date1 = new MyDate();
    date1.setDay(10);
    date1.setMonth(10);
    date1.setYear(2019);
    day = date1.getDay();
    month = date1.getMonth();
    year = date1.getYear();
    alert(day + "/" + month + "/" + year);
}

