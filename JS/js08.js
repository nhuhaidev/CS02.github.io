function thucHien() {
    var noiDung = document.getElementById("noiDung").value;
    var mauNen = document.getElementById("mauNen").value;
    var mauChu = document.getElementById("mauChu").value;

    var banner = document.getElementById("banner");
    banner.textContent = noiDung;
    banner.style.backgroundColor = mauNen;
    banner.style.color = mauChu;
}

window.onload = thucHien;
