function dangKy(e) {
    e.preventDefault();

    var username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Tên đăng nhập bắt buộc phải nhập");
        return false;
    }

    var dobStr = document.getElementById("dob").value;
    var dob = new Date(dobStr);
    if (dobStr === "" || isNaN(dob.getTime())) {
        alert("Ngày sinh phải nhập đúng kiểu dữ liệu");
        return false;
    }

    var password = document.getElementById("password").value;
    var gioiTinhRadio = document.querySelector('input[name="gioiTinh"]:checked');
    var gioiTinh = gioiTinhRadio ? gioiTinhRadio.value : "";
    var vanDe = document.getElementById("vanDe").value;

    var today = new Date();
    var tuoi = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        tuoi--;
    }

    var ketQua = "Chào mừng " + username + "\n";
    ketQua += "Bạn là " + gioiTinh + "\n";
    ketQua += "Mật khẩu của bạn có " + password.length + " ký tự\n";
    ketQua += "Tuổi bạn là " + tuoi + "\n";
    ketQua += "Vấn đề bạn quan tâm là " + vanDe;

    document.getElementById("output").value = ketQua;
    return false;
}

function huy() {
    document.getElementById("regForm").reset();
    document.getElementById("output").value = "";
}
