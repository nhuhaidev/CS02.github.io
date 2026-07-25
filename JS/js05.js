var originalS1 = "";

window.onload = function () {
    originalS1 = document.getElementById("s1").value;
};

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function chuanHoaChuoi() {
    var s1 = document.getElementById("s1").value;
    var s = s1.trim().replace(/\s+/g, " ");
    s = s.split(" ").map(function (w) {
        if (w.length === 0) return w;
        return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    }).join(" ");
    document.getElementById("s1").value = s;
}

function daoChuoi() {
    var s1 = document.getElementById("s1").value.trim();
    if (s1 === "") return;
    var words = s1.split(/\s+/).reverse();
    document.getElementById("s1").value = words.join(" ");
}

function khoiPhuc() {
    document.getElementById("s1").value = originalS1;
}

function thayTheS2BangS3() {
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = document.getElementById("s3").value;
    if (s2 === "") {
        alert("Chuỗi S2 đang trống");
        return;
    }
    var re = new RegExp(escapeRegExp(s2), "gi");
    document.getElementById("s1").value = s1.replace(re, s3);
}

function chenS2VaoS1() {
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var viTri = parseInt(document.getElementById("vitri").value);

    if (isNaN(viTri) || viTri < 0 || viTri > s1.length) {
        alert("Vị trí chèn không hợp lệ! Vui lòng nhập số từ 0 đến " + s1.length);
        return;
    }
    var moi = s1.slice(0, viTri) + s2 + s1.slice(viTri);
    document.getElementById("s1").value = moi;
}

function xoaS2TrongS1() {
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    if (s2 === "") {
        alert("Chuỗi S2 đang trống");
        return;
    }
    var re = new RegExp(escapeRegExp(s2), "gi");
    document.getElementById("s1").value = s1.replace(re, "");
}
