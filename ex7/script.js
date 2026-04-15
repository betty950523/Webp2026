var container = document.getElementById("container");
var wrongCount = 0; // 紀錄連續打錯幾次

// 網頁一開啟，先產生初始亂數字串
window.onload = function () {
    container.textContent = addNewChars(3);
};

// 產生亂數小寫英文字串
// x=3 的意思是隨機產生 1~3 個字母
function addNewChars(x) {
    var n = Math.floor(Math.random() * x) + 1;
    var str = "";

    for (var i = 0; i < n; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }

    return str;
}

// 監聽鍵盤放開事件
window.addEventListener("keyup", function (e) {
    // 只處理 a~z 或 A~Z
    if (!/^[a-zA-Z]$/.test(e.key)) {
        return;
    }

    var inputKey = e.key.toLowerCase();
    var currentText = container.textContent;

    // 如果目前已經空了，就先補新字串
    if (currentText.length === 0) {
        container.textContent = addNewChars(3);
        return;
    }

    var firstChar = currentText.substring(0, 1);

    if (inputKey === firstChar) {
        // 打對：刪掉第一個字
        container.textContent = currentText.substring(1);
        wrongCount = 0; // 連續錯誤歸零
    } else {
        // 打錯：連續錯誤 +1
        wrongCount++;
    }

    // 原本就要增加的亂數字串
    container.textContent += addNewChars(3);

    // 如果連續打錯 2 次，再額外增加 3 個亂數字母
    if (wrongCount >= 2) {
        container.textContent += addExactlyThreeChars();
        wrongCount = 0; // 重新計算下一輪連錯
    }
});

// 固定增加 3 個亂數字母
function addExactlyThreeChars() {
    var str = "";
    for (var i = 0; i < 3; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return str;
}