//bai1
/*
let num = +prompt(" Nhập 1 số bất kỳ (Nhập -1 để kết thúc): ");
let total = 0;
while (num != -1) {
    document.write(` Bạn vừa nhập số: <b>${num}</b> <br>`);
    total += num;
    num = +prompt(" Nhập tiếp 1 số bất kỳ (Nhập -1 để kết thúc): ");
}
document.write(`<hr>`);
document.write(` <b>Tổng các số vừa nhập là: <span style="color: red;">${total}</span></b>`);

 */

//bai2

let i = 1;

while (i < 100) {
    document.write("<hr width = " + i +"%>");
    i++;
}