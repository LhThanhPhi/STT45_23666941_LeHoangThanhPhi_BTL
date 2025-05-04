function addButton() {
  let createdog = document.querySelector(".row-dog");

  let btnDog = document.createElement("button");
  btnDog.classList.add("btn-dog-js", "btn");
  btnDog.innerHTML = "Xem Thêm";
  createdog.append(btnDog);
}

function suKienClickbtn() {
  let btndog = document.querySelector(".btn-dog-js");

  function showDog() {
    handleShow(5, 12);
    btndog.style.display = "none";
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
}

// Gọi sau khi DOM đã sẵn sàng
window.onload = function () {
  addButton();
  suKienClickbtn();
};
