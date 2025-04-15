// Lấy danh sách đơn hàng từ localStorage
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Lấy phần tử tbody của bảng để thêm các dòng đơn hàng
let tbody = document.querySelector("table tbody");

// Kiểm tra nếu có đơn hàng
if (orders.length === 0) {
  // Nếu không có đơn hàng, hiển thị thông báo
  tbody.innerHTML = "<tr><td colspan='4'>Chưa có đơn hàng nào!</td></tr>";
} else {
  // Duyệt qua từng đơn hàng và tạo các dòng (tr)
  orders.forEach((order) => {
    let row = document.createElement("tr");

    // Tạo các ô dữ liệu (td) cho mỗi dòng
    row.innerHTML = `
      <td>${order.stt}</td>
      <td>${order.ngayDat}</td> <!-- Hiển thị ngày, giờ -->
      <td>${order.tongTien}</td>
      <td>${order.phuongThuc}</td>
    `;

    // Thêm dòng vào bảng
    tbody.appendChild(row);
  });
}
// clear lịch sử
document.querySelector(".btn-xoals").addEventListener("click", function () {
  localStorage.removeItem("orders");
  location.reload();
});
