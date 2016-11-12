var mf;
mf = function (s1, s2, s3) {
    var result = [];
    result.push(s1);
    result.push(s2);
    result.push(s3);
    return result;
};
var mf2;
mf2 = function (s1, s2, s3) {
    var result = [];
    result.push(s1.toUpperCase());
    result.push(s2.toUpperCase());
    result.push(s3.toUpperCase());
    return result;
};
console.log(mf("hej", "med", "dig"));
console.log(mf2("Magnus", "er", "noob"));
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["a", "b", "c"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
f2(mf);
f2(mf2);
//# sourceMappingURL=interfaces-2.js.map