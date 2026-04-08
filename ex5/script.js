let count = 1;

function addfunction() {
    let btn = document.createElement("button");

    btn.innerHTML = "CLICK ME (" + count + ")";
    btn.setAttribute("id", "btn_" + count);
    btn.setAttribute("class", "btn btn-outline-danger me-2 mb-2");

    document.getElementById("buttonArea").appendChild(btn);

    count++;
}

function delfunction() {
    if (count <= 1) {
        alert("目前沒有可以刪除的按鈕！");
        return;
    }

    count--;
    let btn = document.getElementById("btn_" + count);

    document.getElementById("buttonArea").removeChild(btn);
}