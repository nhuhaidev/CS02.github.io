function veHinh() {
    var canvas = document.getElementById("canvasVe");
    var ctx = canvas.getContext("2d");
    var cx = 110, cy = 110;

    // Vòng tròn nền, gradient hồng - đỏ
    var grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 100);
    grad.addColorStop(0, "#ffc1cc");
    grad.addColorStop(1, "#e53935");
    ctx.beginPath();
    ctx.arc(cx, cy, 100, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    // Hai đường chéo đỏ tạo hình chữ X
    ctx.strokeStyle = "#c62828";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(cx - 90, cy - 90);
    ctx.lineTo(cx + 90, cy + 90);
    ctx.moveTo(cx + 90, cy - 90);
    ctx.lineTo(cx - 90, cy + 90);
    ctx.stroke();

    // Hình thoi (hình vuông xoay 45 độ) màu vàng
    ctx.beginPath();
    ctx.moveTo(cx, cy - 70);
    ctx.lineTo(cx + 70, cy);
    ctx.lineTo(cx, cy + 70);
    ctx.lineTo(cx - 70, cy);
    ctx.closePath();
    ctx.fillStyle = "#ffeb3b";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#e53935";
    ctx.stroke();

    // Chữ HTML5
    ctx.fillStyle = "#0d47a1";
    ctx.font = "bold 26px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("HTML5", cx, cy);
}

window.onload = veHinh;
