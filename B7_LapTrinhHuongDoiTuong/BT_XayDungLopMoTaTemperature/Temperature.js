var MyConvert = function (celsius) {
    this.celsius = celsius;
    this.getCelsius = function () {
        return this.celsius;
    };
    this.getCconvertF = function () {
        return (9 * this.celsius) / 5 + 32;
    };
    this.getCconvertK = function () {
        return this.celsius * 273.16;
    };
    this.display = function () {
        return " C Convert F : " + this.getCconvertF() + ", C Convert Kenvin : " + this.getCconvertK();
    };
};
