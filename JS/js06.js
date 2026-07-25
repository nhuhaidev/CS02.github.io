function thucHienTinh() {
    var so1 = parseFloat(document.getElementById("so1").value);
    var so2 = parseFloat(document.getElementById("so2").value);
    var pheps = document.getElementsByName("phepToan");
    var phep = "";

    for (var i = 0; i < pheps.length; i++) {
        if (pheps[i].checked) {
            phep = pheps[i].value;
            break;
        }
    }

    if (isNaN(so1) || isNaN(so2)) {
        alert("Vui lòng nhập đầy đủ số thứ 1 và số thứ 2");
        return false;
    }

    var ketQua;
    switch (phep) {
        case "cong": ketQua = so1 + so2; break;
        case "tru": ketQua = so1 - so2; break;
        case "nhan": ketQua = so1 * so2; break;
        case "chia":
            if (so2 === 0) {
                alert("Không thể chia cho 0");
                return false;
            }
            ketQua = so1 / so2;
            break;
    }

    document.getElementById("ketQua").value = ketQua;
    return false;
}
