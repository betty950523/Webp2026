console.log("script.js 有載入");

var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
console.log("API:", openUrl);

var xhr = new XMLHttpRequest();
xhr.open("GET", openUrl, true);
xhr.send();

xhr.onreadystatechange = function () {
    console.log("readyState =", this.readyState, "status =", this.status);

    if (this.readyState === 4) {
        console.log("responseText =", this.responseText);

        if (this.status === 200) {
            try {
                var dataset = JSON.parse(this.responseText);
                console.log("dataset =", dataset);
                addNewData(dataset);
            } catch (error) {
                console.log("JSON 解析失敗：", error);
            }
        } else {
            console.log("請求失敗，status =", this.status);
        }
    }
};

function addNewData(dataset) {
    console.log("進入 addNewData");
    var myTable = document.getElementById("csie");

    dataset.forEach(function (data, index) {
        console.log("第", index, "筆資料 =", data);

        var row = myTable.insertRow(-1);

        row.insertCell(0).innerHTML = data["title"] || "無資料";

        if (data["showInfo"] && data["showInfo"].length > 0) {
            row.insertCell(1).innerHTML = data["showInfo"][0]["location"] || "無資料";
            row.insertCell(2).innerHTML = data["showInfo"][0]["price"] || "無資料";
        } else {
            row.insertCell(1).innerHTML = "無資料";
            row.insertCell(2).innerHTML = "無資料";
        }
    });
}