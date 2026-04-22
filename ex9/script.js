var imglist_Url =
  "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1";

function getimg() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", imglist_Url, true);
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      var data = JSON.parse(this.responseText);
      console.log("Flickr getRecent 回傳資料：", data);
      add_new_img(data);
    } else {
      console.error("API request failed:", xhr.status);
    }
  };
}

function add_new_img(dataset) {
  var gal = document.getElementById("gallery");
  gal.innerHTML = "";

  var photoArray = dataset.photos.photo;

  photoArray.forEach(function (item) {
    var img = document.createElement("img");

    var imgUrl =
      "https://live.staticflickr.com/" +
      item.server +
      "/" +
      item.id +
      "_" +
      item.secret +
      "_w.jpg";

    img.setAttribute("src", imgUrl);
    img.setAttribute("alt", item.title || "flickr photo");

    gal.appendChild(img);
  });
}