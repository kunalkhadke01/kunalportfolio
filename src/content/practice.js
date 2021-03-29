// let s = "hey this is test";
// w = s.split('')
// const filteredStrings = Object.values(w).filter((item, index) => {
//     return w.indexOf(item) === index
// });

const toUniqueArray = (a) => {
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
    return newArr;
}
var colors = "hey this is test";
color = colors.split('')
// toUniqueArray(colors);
const output = toUniqueArray(color)
console.log(output)

// console.log(filteredStrings.join(""))