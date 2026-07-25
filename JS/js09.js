function themKyNang() {
    var skill = prompt("Nhập kỹ năng mới:");
    if (skill !== null && skill.trim() !== "") {
        var span = document.createElement("span");
        span.className = "badge";
        span.textContent = skill.trim();
        document.getElementById("skillsList").appendChild(span);
    }
}

function themKinhNghiem() {
    var title = document.getElementById("expTitle").value.trim();
    var desc = document.getElementById("expDesc").value.trim();

    if (title === "" || desc === "") {
        alert("Vui lòng nhập đầy đủ Kinh nghiệm và Mô tả");
        return;
    }

    var div = document.createElement("div");
    div.className = "exp-item";
    div.innerHTML = "<b>" + title + "</b><div class='exp-desc'>" + desc + "</div>";
    document.getElementById("expList").appendChild(div);

    document.getElementById("expTitle").value = "";
    document.getElementById("expDesc").value = "";
}
