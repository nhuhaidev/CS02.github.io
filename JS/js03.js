function thongKe() {
    var chuoi = document.getElementById("chuoi").value;
    var soKyTu = chuoi.length;
    var soTu = chuoi.trim() === "" ? 0 : chuoi.trim().split(/\s+/).length;

    var demKyTu = {};
    for (var i = 0; i < chuoi.length; i++) {
        var c = chuoi[i];
        if (/[a-zA-Z0-9]/.test(c)) {
            var key = /[0-9]/.test(c) ? c : c.toUpperCase();
            demKyTu[key] = (demKyTu[key] || 0) + 1;
        }
    }

    var keys = Object.keys(demKyTu).sort(function (a, b) {
        var aSo = /[0-9]/.test(a), bSo = /[0-9]/.test(b);
        if (aSo && !bSo) return -1;
        if (!aSo && bSo) return 1;
        return a < b ? -1 : (a > b ? 1 : 0);
    });

    var html = "<p><b>Characters:</b> " + soKyTu + "</p>";
    html += "<p><b>Words:</b> " + soTu + "</p>";
    keys.forEach(function (k) {
        html += "<p>Character '" + k + "': " + demKyTu[k] + "</p>";
    });

    document.getElementById("ketQua").innerHTML = html;
}
