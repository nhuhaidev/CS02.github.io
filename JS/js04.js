var mang = [];

function taoMang() {
    var n = parseInt(document.getElementById("soPhanTu").value);
    if (isNaN(n) || n <= 0) {
        alert("Vui lòng nhập số phần tử hợp lệ (số nguyên dương)");
        return;
    }
    mang = [];
    for (var i = 0; i < n; i++) {
        mang.push(Math.floor(Math.random() * 50));
    }
    document.getElementById("mangBanDau").innerHTML = "Mảng ban đầu: " + mang.join("&nbsp;&nbsp;");
    document.getElementById("mangTang").innerHTML = "";
    document.getElementById("mangGiam").innerHTML = "";
}

function sapXepTang() {
    if (mang.length === 0) return;
    var arr = mang.slice().sort(function (a, b) { return a - b; });
    document.getElementById("mangTang").innerHTML = "Mảng tăng dần: " + arr.join("&nbsp;&nbsp;");
}

function sapXepGiam() {
    if (mang.length === 0) return;
    var arr = mang.slice().sort(function (a, b) { return b - a; });
    document.getElementById("mangGiam").innerHTML = "Mảng giảm dần: " + arr.join("&nbsp;&nbsp;");
}
