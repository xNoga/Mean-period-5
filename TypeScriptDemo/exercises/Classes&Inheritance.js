var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shape = (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.getArea = function () {
        return undefined;
    };
    Shape.prototype.getPerimeter = function () {
        return undefined;
    };
    Shape.prototype.toString = function () {
        return "color: " + this.color;
    };
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    return Shape;
}());
var s1 = new Shape("blue");
console.log("" + s1.toString());
s1.setColor("green");
console.log("" + s1.getColor());
var Cirle = (function (_super) {
    __extends(Cirle, _super);
    function Cirle(color, radius) {
        _super.call(this, color);
        this.color = color;
        this.radius = radius;
    }
    Cirle.prototype.toString = function () {
        return "color: " + this.color + ", radius: " + this.radius;
    };
    Cirle.prototype.getRadius = function () {
        return this.radius;
    };
    Cirle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    return Cirle;
}(Shape));
var c1 = new Cirle("blue", 34);
c1.setRadius(44);
console.log(c1.getColor() + c1.toString());
var Cylinder = (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(color, radius, height) {
        _super.call(this, color, radius);
        this.color = color;
        this.radius = radius;
        this.height = height;
    }
    Cylinder.prototype.getHeight = function () { return this.height; };
    Cylinder.prototype.setHeight = function (height) { this.height = height; };
    return Cylinder;
}(Cirle));
function printType(a) {
    // console.log(`type: ${a.constructor.name}`) // virker men giver fejl?
}
printType(23);
function printTypes(arr) {
    var result = [];
    arr.forEach(function (item) {
        result.push(item.constructor.name);
    });
    return result;
}
function reverseArr(arr) {
    var result = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log(printTypes(["hej", 23, new Date]));
console.log(reverseArr(["hej", "med", "dig"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr(["hej", "med", "dig"]));
var dataHolder = (function () {
    function dataHolder(item) {
        this.item = item;
    }
    dataHolder.prototype.getData = function () { return this.item; };
    dataHolder.prototype.setData = function (data) { this.item = data; };
    return dataHolder;
}());
var d1 = new dataHolder("hej");
console.log(d1.getData());
d1.setData(300);
console.log(d1.getData());
var Owner = (function () {
    function Owner(owner) {
        this.owner = owner;
    }
    return Owner;
}());
var o1 = new Owner("Magnoob");
var o2 = {
    name: "lars"
};
function printOwner(item) {
    console.log(item.owner);
}
printOwner(o1);
//printOwner(o2); virker ikke, objektet skal have en property 'owner'. 
//# sourceMappingURL=Classes&Inheritance.js.map