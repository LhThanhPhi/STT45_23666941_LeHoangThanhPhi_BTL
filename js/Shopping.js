window.addEventListener("DOMContentLoaded", () => {
  const food = JSON.parse(localStorage.getItem("food")) || [];
  const tbody = document.querySelector(".tb-shopping .food");
  const tfoot = document.querySelector(".tb-shopping tfoot");

  // Nếu giỏ hàng trống
  if (food.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center;">Giỏ hàng trống</td></tr>`;
    return;
  }

  let html = "";
  let totalAll = 0;

  food.forEach((item, index) => {
    totalAll += item.total;
    html += `
        <tr data-index="${index}">
          <td><img src="${item.img}" alt="" style="width: 60px;"></td>
          <td>${item.title}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>${item.total.toLocaleString("vi-VN")} đ</td>
          <td><button class="btn btn-danger btn-delete">Xoá</button></td>
        </tr>
      `;
  });

  tbody.innerHTML = html;

  // Hiển thị tổng tiền toàn bộ giỏ
  tfoot.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: right;"><strong>Tổng cộng:</strong></td>
        <td colspan="2"><strong>${totalAll.toLocaleString("vi-VN")} đ</strong></td>
      </tr>
    `;

  // Xử lý nút xoá
  document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      const index = row.dataset.index;

      food.splice(index, 1); // xoá sản phẩm khỏi mảng
      localStorage.setItem("food", JSON.stringify(food)); // cập nhật localStorage

      // Xoá phần tử khỏi DOM mà không cần tải lại trang
      tbody.deleteRow(row.rowIndex - 1); // rowIndex bắt đầu từ 1, cần trừ 1 để tương ứng với vị trí trong mảng

      // Cập nhật lại tổng tiền
      let totalAllUpdated = 0;
      food.forEach((item) => {
        totalAllUpdated += item.total;
      });

      tfoot.innerHTML = `
          <tr>
            <td colspan="4" style="text-align: right;"><strong>Tổng cộng:</strong></td>
            <td colspan="2"><strong>${totalAllUpdated.toLocaleString("vi-VN")} đ</strong></td>
          </tr>
        `;
    });
  });
});
