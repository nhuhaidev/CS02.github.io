google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(function () {
    document.getElementById("btnDraw").disabled = false;
});

function mauNgauNhien() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function veBieuDo() {
    var nhanStr = document.getElementById("tieuDe").value;
    var giaTriStr = document.getElementById("giaTri").value;

    var nhan = nhanStr.split(",").map(function (s) { return s.trim(); });
    var giaTri = giaTriStr.split(",").map(function (s) { return parseFloat(s.trim()); });

    if (nhan.length !== giaTri.length || nhan.length === 0 || giaTri.some(isNaN)) {
        alert("Số lượng tiêu đề và giá trị phải bằng nhau và hợp lệ");
        return;
    }

    var mang = [["Loại", "Giá trị"]];
    for (var i = 0; i < nhan.length; i++) {
        mang.push([nhan[i], giaTri[i]]);
    }
    var data = google.visualization.arrayToDataTable(mang);

    var mauSac = nhan.map(function () { return mauNgauNhien(); });
    var loai = document.querySelector('input[name="loaiBieuDo"]:checked').value;

    var options = {
        title: "Kết quả học tập",
        width: 420,
        height: 320,
        colors: mauSac
    };

    var chart;
    if (loai === "pie") {
        chart = new google.visualization.PieChart(document.getElementById("chartDiv"));
    } else if (loai === "line") {
        chart = new google.visualization.LineChart(document.getElementById("chartDiv"));
        options.colors = [mauSac[0]];
        options.legend = { position: "right" };
    } else {
        chart = new google.visualization.ColumnChart(document.getElementById("chartDiv"));
        options.legend = { position: "none" };
    }

    chart.draw(data, options);
}
