let MyDate = function (day, month, year) {

    this.day = day;
    this.getDay = function () {
        return this.day;
    };
    this.setDay = function(day) {
        this.day  = day;
    };
    this.month = month;
    this.getMonth = function () {
        return this.month;
    };
    this.setMonth = function(month) {
        this.month  = month;
    };

    this.year = year;

    this.getYear = function () {
        return this.year;
    };
    this.setYear = function(year) {
        this.year  = year;
    };
};

