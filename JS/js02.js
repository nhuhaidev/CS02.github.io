var thang, nam;

function batDauNhap() {
    var thangHopLe = false;
    while (!thangHopLe) {
        var nhapThang = prompt("Nhập tháng", "");
        thang = parseInt(nhapThang);
        if (!isNaN(thang) && thang >= 1 && thang <= 12) {
            thangHopLe = true;
        }
    }

    var namHopLe = false;
    while (!namHopLe) {
        var nhapNam = prompt("Nhập năm", "2000");
        nam = parseInt(nhapNam);
        if (!isNaN(nam) && nam > 0) {
            namHopLe = true;
        }
    }

    hienThiSoNgay();
}

function hienThiSoNgay() {
    var soNgay = new Date(nam, thang, 0).getDate();
    document.getElementById("ketQua").innerHTML =
        "Tháng " + thang + " năm " + nam + " có " + soNgay + " ngày";
    document.getElementById("box").style.display = "block";
}

function xemNgayGio() {
    document.getElementById("ngayHienTai").style.display = "block";
    document.getElementById("dongHo").style.display = "block";
    capNhatNgay();
    capNhatGio();
    setInterval(capNhatGio, 1000);
}

function capNhatNgay() {
    var tenThu = ["Chủ nhật", "thứ 2", "thứ 3", "thứ 4", "thứ 5", "thứ 6", "thứ 7"];
    var d = new Date();
    document.getElementById("ngayHienTai").innerHTML =
        "Hôm nay, " + tenThu[d.getDay()] + " ngày " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
}

function capNhatGio() {
    var d = new Date();
    var h = String(d.getHours()).padStart(2, "0");
    var m = String(d.getMinutes()).padStart(2, "0");
    var s = String(d.getSeconds()).padStart(2, "0");
    document.getElementById("dongHo").innerHTML = h + ":" + m + ":" + s;
}

window.onload = batDauNhap;
