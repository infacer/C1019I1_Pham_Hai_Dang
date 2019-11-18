let Apple = function () {
    this.weight = 10;
    this.reduction = function () {
        if (this.weight > 0) {
            this.weight--;
        } else {
            return false;
        }
    };
    this.getWeight = function () {
        return this.weight;
    };
};
let Human = function () {
    this.name = "";
    this.gender = true;
    this.weight = 0;
    this.isMale = function () {
        return this.gender;
    };
    this.setGender = function (gender) {
        this.gender = gender;
    };
    this.checkApple = function (apple) {
        return apple.weight > 0;
    };
    this.eat = function (apple) {


    };
    this.say = function (say) {

    };
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;

    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (weight) {
        this.weight = weight;
        return this.weight;
    };
};