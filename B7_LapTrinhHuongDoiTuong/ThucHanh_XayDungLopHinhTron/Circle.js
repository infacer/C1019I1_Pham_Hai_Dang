let Circle = function(radius) {
    this.radius = radius;
    this.getRadius = function() {
        return radius;
    };
    this.getArea = function() {
        return Math.PI * radius * radius;
    };

};