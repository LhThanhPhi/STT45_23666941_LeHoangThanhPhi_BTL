// ẩn hiện phương thức thanh toán
let payOnl = document.querySelector(".tt-onl");

payOnl.addEventListener("click", function () {
  document.querySelector("#pay-online").style.display = "inline-block";
  document.querySelector(".imghidden-pay2").style.display = "block";
  document.querySelector(".imghidden-pay1").style.display = "none";
});

let payOff = document.querySelector(".tt-of");
payOff.addEventListener("click", function () {
  document.querySelector(".imghidden-pay1").style.display = "block";
  document.querySelector(".imghidden-pay2").style.display = "none";
  document.querySelector("#pay-online").style.display = "none";
});

document.getElementById("pay-online").addEventListener("change", function () {
  const value = this.value;
  const img = document.querySelector(".imghidden-pay2");

  if (value === "Momo") {
    img.setAttribute("src", "../img/momo.png");
  } else if (value === "Google Pay") {
    img.setAttribute("src", "../img/ggpay.webp");
  } else if (value === "Ngân Hàng") {
    img.setAttribute("src", "../img/bank.jpg");
  } else {
    img.setAttribute("src", ""); // hoặc ẩn đi nếu cần
  }
});
// regex
function checkTel() {
  let x = document.querySelector("#tel-cus").value;
  let xTest = /^0[1-9]{1}[0-9]{8}$/;
  if (xTest.test(x)) {
    document.querySelector(".check-tel-pay").innerHTML = "Giá Trị Hợp Lệ";
    document.querySelector(".check-tel-pay").style.color = "green";
  } else {
    document.querySelector(".check-tel-pay").innerHTML = "Số điện thoại phải bắt đầu bằng số 0 và có 10 chữ số";
    document.querySelector(".check-tel-pay").style.color = "red";
  }
}
document.querySelector("#tel-cus").addEventListener("blur", checkTel);

function checkAdd() {
  let x = document.querySelector("#address").value;
  let xTest = /.*[a-zA-Z].*[0-9]|.*[0-9].*[a-zA-Z].*/;
  if (xTest.test(x)) {
    document.querySelector(".check-add-pay").innerHTML = "Giá Trị Hợp Lệ";
    document.querySelector(".check-add-pay").style.color = "green";
  } else {
    document.querySelector(".check-add-pay").innerHTML = "Có ít nhất một chữ và một số, ở bất kỳ vị trí nào trong chuỗi, thì hợp lệ.";
    document.querySelector(".check-add-pay").style.color = "red";
  }
}
document.querySelector("#address").addEventListener("blur", checkAdd);

// hiện hàng lên trang thanh toán
function showCartOnPaymentPage() {
  const food = JSON.parse(localStorage.getItem("food")) || [];
  const container = document.querySelector(".item-product");
  const totalEl = document.querySelector(".total-amount");

  if (!container) return;

  if (food.length === 0) {
    container.innerHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
    if (totalEl) totalEl.innerHTML = "Tổng tiền: 0đ";
    return;
  }

  let html = "";
  let grandTotal = 0;

  food.forEach((item) => {
    grandTotal += item.total;

    html += `
        <div class="product-item" style="display: flex; gap: 16px; margin-bottom: 16px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
          <img src="${item.img}" alt="${item.title}" style="width: 80px; height: 80px; object-fit: cover;">
          <div>
            <h5>${item.title}</h5>
            <p>Giá: ${item.price}</p>
            <p>Số lượng: ${item.quantity}</p>
            <p>Tổng: ${item.total.toLocaleString("vi-VN")}đ</p>
          </div>
        </div>
      `;
  });

  container.innerHTML = html;

  // Hiển thị tổng tiền toàn bộ giỏ hàng
  if (totalEl) {
    totalEl.innerHTML = `Tổng tiền: ${grandTotal.toLocaleString("vi-VN")}đ`;
  }
}

// Gọi khi trang thanh toán được load
document.addEventListener("DOMContentLoaded", showCartOnPaymentPage);
