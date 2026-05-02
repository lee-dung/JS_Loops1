//bai1
/*
let text ="";
let i;
for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br> ";
}
document.write(text);

 */

//bai2

let num = +prompt("Enter your number: ");
let total = 0;
for (let i = 0; i <= num; i+=1) {
    total = total + i;
}
alert(total);