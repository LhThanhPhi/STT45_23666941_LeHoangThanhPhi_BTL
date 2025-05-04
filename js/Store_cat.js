function addButton() {
  let createcat = document.querySelector(".row-cat");

  let btnCat = document.createElement("button");
  btnCat.classList.add("btn-cat-js", "btn");
  btnCat.innerHTML = "Xem Thêm";
  createcat.append(btnCat);
}

function suKienClickbtn() {
  let btncat = document.querySelector(".btn-cat-js");

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
  btncat.addEventListener("click", showCat);
}

// Gọi sau khi DOM đã sẵn sàng
window.onload = function () {
  addButton();
  suKienClickbtn();
};
