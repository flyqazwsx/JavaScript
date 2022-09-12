//var,let,const
// 常數宣告

const PI = 3.1415926;
// let radius = prompt("請輸入半徑:");
//area = radius ** 2 * PI;
//document.write("<h2 style='color:red'>面積為:" + area + "</h2>");

//console.log(radius, typeof (radius));

//alert("面積為:" + area);
// 輸入兩個數字的並進行加總輸出
// Number ==> int/float
//let x = Number(prompt("請輸入第一個數字:"));
//let y = Number(prompt("請輸入第一個數字:"));
let x = 10;
let y = 20;
// 自串串接
document.write("<h3>" + x + "+" + y + "=" + (x + y) + "</h3>")
// 字串樣板
const result = `<h3>${x}+${y}=${x + y}</h3>`;
document.write(result);

//字串用法
let email = "123jerry@gmail.com";
console.log(email, typeof (email));
console.log(email.length);
console.log(email[0]);
console.log(email[email.length - 1]);
console.log(email.indexOf("m"));
console.log(email.lastIndexOf("m"));
console.log(email.substring(0, 5));
console.log(email.replace("jerry", "mary"));
console.log(email.includes("jerry"));
// 值是否相等
console.log(email.substring(0, 3) == "123");
// 值跟型態都要相等
console.log(email.substring(0, 3) == "123");

// 使用for迴圈
for (let i = 0; i < email.length; i++) {
    console.log(i, email[i]);
}

let a = 0;
let b = 0;

console.log(a + b++);
console.log(a, b);

console.log("A" > "a");
console.log("Ab" > "AB");

x = Boolean(NaN);
if (!x) {
    console.log(x);
}

x = 10;
y = 20;
z = 30;
// and==>&&or ==>|| && not==>!
// 短路模式
if (x > y || z++ > y || z) {
    console.log("1");
}

console.log(x, y, z);

let x1 = null;
console.log(x1, x1 + 10);

let x2;
console.log(x2, x2 + 10);

// 亂數
console.log(Math.PI);
x = -7.7;
console.log(Math.abs(x));
// 大於等於整數
console.log(Math.ceil(x));
// 小於等於整數
console.log(Math.floor(x));
// 四捨五入
console.log(Math.round(x));

// 取出0~10之間的浮點數
x = Math.random()
console.log(x);
console.log(x * 10);
// 1~10之間
//for (let i = 0; i < 100; i++) {
//    console.log(Math.floor(Math.random() * 10) + 1);
//}

// 0~10之間的亂數
let start = 0;
let end = 49;
for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * (end - start + 1)) + start);
}

let count = 0;
while (true) {
    let x = Math.floor(Math.random() * (end - start + 1)) + start;
    console.log(x);
    if (x == 49) {
        break;
    }
    count++;
}

//d0-while
x = 0;
count = 0;
do {
    x = Math.floor(Math.random() * (end - start + 1)) + start;
    console.log(x);
    count++;
} while (x != 49);

console.log(`次數:${count}`);
