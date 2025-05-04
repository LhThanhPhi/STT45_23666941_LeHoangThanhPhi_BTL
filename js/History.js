const orders = JSON.parse(localStorage.getItem("orders")) || [];
const food3 = JSON.parse(localStorage.getItem("food3")) || [];

let tbody = document.querySelector("table tbody");

if (orders.length === 0) {
  // Nếu không có đơn hàng, hiển thị thông báo
  tbody.innerHTML = "<tr><td colspan='5'>Chưa có đơn hàng nào!</td></tr>";
} else {
  orders.forEach((order, index) => {
    const foodItems = food3[index]; // Lấy danh sách món tương ứng với đơn hàng
    let htmlFood = "";

    foodItems.forEach((item) => {
      htmlFood += `
        <div class="product-bill" style="display: flex;align-items: center; gap: 16px; margin-bottom: 16px;">
          <img src="${item.img}" alt="${item.title}" style="width: 50px; height: 50px; object-fit: cover;">
          <div>
            <h5 style="font-size: 15px;font-weight:normal;">${item.title}</h5>
            <p style="display:inline-block; margin-right:5px;">Giá: ${item.price}</p>
            <p style="display:inline-block; margin-right:5px;">Số lượng: ${item.quantity}</p>
            <p style="display:inline-block;">Tổng: ${item.total.toLocaleString("vi-VN")}đ</p>
          </div>
        </div>
      `;
    });

    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.stt}</td>
      <td>${htmlFood}</td>
      <td>${order.ngayDat}</td>
      <td>${order.tongTien.toLocaleString("vi-VN")}</td>
      <td>${order.phuongThuc}</td>
    `;
    tbody.appendChild(row);
  });
}

// Nút xóa lịch sử
document.querySelector(".btn-xoals").addEventListener("click", function () {
  localStorage.removeItem("orders");
  localStorage.removeItem("food3");
  location.reload();
});
