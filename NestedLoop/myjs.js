let table = "<table border='1' cellpadding='10' cellspacing='0' style='text-align: center'>";

for (let i = 1; i <= 10; i++) {
    table += "<tr>";
    for (let j = 1; j <= 10; j++) {
        let result = i*j;
        table += `<td> ${result} </td>`;
    }
    table += "</tr>";
}
table += "</table>";

document.write(table);