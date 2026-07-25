function taoBangCuuChuong() {
    var table = document.getElementById("cuuchuong");
    var groups = [[2, 3, 4, 5], [6, 7, 8, 9]];

    groups.forEach(function (group) {
        var row = document.createElement("tr");
        group.forEach(function (base) {
            var cell = document.createElement("td");
            var lines = [];
            for (var m = 2; m <= 9; m++) {
                lines.push(base + " x " + m + " = " + (base * m));
            }
            cell.innerHTML = lines.join("<br>");
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
}

window.onload = taoBangCuuChuong;
