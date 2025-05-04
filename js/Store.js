function addButton() {
  let createdog = document.querySelector(".row-dog");
  let createcat = document.querySelector(".row-cat");

  let btnDog = document.createElement("button");
  btnDog.classList.add("btn-dog-js", "btn");
  btnDog.innerHTML = "Xem Thêm";
  createdog.append(btnDog);

  let btnCat = document.createElement("button");
  btnCat.classList.add("btn-cat-js", "btn");
  btnCat.innerHTML = "Xem Thêm";
  createcat.append(btnCat);
}

function suKienClickbtn() {
  let btndog = document.querySelector(".btn-dog-js");
  let btncat = document.querySelector(".btn-cat-js");

  function showDog() {
    handleShow(5, 12);
    btndog.style.display = "none";
  }

  function showCat() {
    handleShow(17, 24);
    btncat.style.display = "none";
  }

  function handleShow(x, n) {
    for (let i = x; i <= n; i++) {
      let item = document.querySelector(`.item${i}`);
      if (item) {
        item.style.display = "block";
      }
    }
  }

  btndog.addEventListener("click", showDog);
  btncat.addEventListener("click", showCat);
}

// Gọi sau khi DOM đã sẵn sàng
window.onload = function () {
  addButton();
  suKienClickbtn();
};
