const container = document.getElementById("container");

// 產生 a-z 的隨機字母
function randomChar() {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    return chars[Math.floor(Math.random() * chars.length)];
}

// 產生指定數量的隨機字串
function randomString(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += randomChar();
    }
    return result;
}

// 在字串後面補 1~3 個隨機字元
function add_new_chars() {
    const addCount = Math.floor(Math.random() * 3) + 1; // 1~3
    container.textContent += randomString(addCount);
}

// 網頁載入時先產生 0~2 個字元
window.onload = function () {
    const startCount = Math.floor(Math.random() * 3); // 0~2
    container.textContent = randomString(startCount);
};

// 監聽鍵盤輸入
window.addEventListener("keyup", function (e) {
    console.log(e.key);

    // 只接受單一英文字母 a-z
    if (!/^[a-z]$/i.test(e.key)) {
        return;
    }

    // 取得目前 container 的字串
    let currentText = container.textContent;

    // 如果有字，而且輸入的字和第一個字一樣，就刪掉第一個字
    if (currentText.length > 0 && e.key.toLowerCase() === currentText[0].toLowerCase()) {
        container.textContent = currentText.substring(1);
    }

    // 每次 keyup 後都補 1~3 個亂數字母到後面
    add_new_chars();
});