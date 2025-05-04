// hỗ trợ si su so (load lưu trữ khi load trang giữ trạng thái si từ localstorage)
window.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    document.querySelector(".btn-si").style.display = "none";
    document.querySelector(".btn-su").style.display = "none";
    document.querySelector(".after-si").style.display = "inline-block";
    document.querySelector(".after-si").innerHTML = `Xin chào ${loggedInUser.ho} ${loggedInUser.ten}`;
    document.querySelector(".btn-so").style.display = "inline-block";

    document.querySelector(".btn-so").addEventListener("click", function () {
      localStorage.removeItem("loggedInUser");
      location.reload();
    });
  }
});

// regex su : sign up
function checkTenSU() {
  let checkTen = /^[\p{Lu}][\p{Ll}]*(?: [\p{Lu}][\p{Ll}]*)*$/u;
  let ten = document.querySelector(".ten-su").value;
  let spTen = document.querySelector(".sp-ten-su");
  if (checkTen.test(ten)) {
    spTen.style.color = "green";
    spTen.innerHTML = "Giá trị hợp lệ";
  } else {
    spTen.style.color = "red";
    spTen.innerHTML = "Tên phải là tiếng việt có dấu hoa chữ cái đầu ít nhất 1 từ";
  }
}

let KiemTratenSu = document.querySelector(".ten-su");
KiemTratenSu.addEventListener("blur", checkTenSU);

function checkHoSU() {
  let checkHo = /^[\p{Lu}][\p{Ll}]*(?: [\p{Lu}][\p{Ll}]*)*$/u;
  let ho = document.querySelector(".ho-su").value;
  let spHo = document.querySelector(".sp-ho-su");
  if (checkHo.test(ho)) {
    spHo.style.color = "green";
    spHo.innerHTML = "Giá trị hợp lệ";
  } else {
    spHo.style.color = "red";
    spHo.innerHTML = "Họ phải là tiếng việt có dấu hoa chữ cái đầu ít nhất 1 từ";
  }
}

let KiemTraHoSu = document.querySelector(".ho-su");
KiemTraHoSu.addEventListener("blur", checkHoSU);

function checkEmailSu() {
  let checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let email = document.querySelector(".email-su").value;
  let spEmail = document.querySelector(".sp-email-su");
  if (checkEmail.test(email)) {
    spEmail.style.color = "green";
    spEmail.innerHTML = "Giá trị hợp lệ";
  } else {
    spEmail.style.color = "red";
    spEmail.innerHTML = "Email có phần tên, ký tự @, tên miền và đuôi miền ít nhất 2 từ.";
  }
}

let kiemTraEmailSu = document.querySelector(".email-su");
kiemTraEmailSu.addEventListener("blur", checkEmailSu);

function checkPassWordSu() {
  let checkPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  let pass = document.querySelector(".pass-su").value;
  let spPass = document.querySelector(".sp-pass-su");
  if (checkPass.test(pass)) {
    spPass.style.color = "green";
    spPass.innerHTML = "Giá trị hợp lệ";
  } else {
    spPass.style.color = "red";
    spPass.innerHTML = "Mật khẩu tối thiểu 6 ký tự, chứa ít nhất 1 chữ cái và 1 chữ số";
  }
}

let kiemTraPassSu = document.querySelector(".pass-su");
kiemTraPassSu.addEventListener("blur", checkPassWordSu);

// regex si sign in
function checkEmailSi() {
  let checkEmail2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let email2 = document.querySelector(".email-si").value;
  let spEmail2 = document.querySelector(".sp-email-si");
  if (checkEmail2.test(email2)) {
    spEmail2.style.color = "green";
    spEmail2.innerHTML = "Giá trị hợp lệ";
  } else {
    spEmail2.style.color = "red";
    spEmail2.innerHTML = "Email có phần tên, ký tự @, tên miền và đuôi miền ít nhất 2 từ.";
  }
}

let kiemTraEmailSi = document.querySelector(".email-si");
kiemTraEmailSi.addEventListener("blur", checkEmailSi);

function checkPassWordSi() {
  let checkPass2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  let pass2 = document.querySelector(".pass-si").value;
  let spPass2 = document.querySelector(".sp-pass-si");
  if (checkPass2.test(pass2)) {
    spPass2.style.color = "green";
    spPass2.innerHTML = "Giá trị hợp lệ";
  } else {
    spPass2.style.color = "red";
    spPass2.innerHTML = "Mật khẩu tối thiểu 6 ký tự, chứa ít nhất 1 chữ cái và 1 chữ số";
  }
}

let kiemTraPassSi = document.querySelector(".pass-si");
kiemTraPassSi.addEventListener("blur", checkPassWordSi);

// clear form sau khi bấm đăng kí / đăng nhập
function clearSignUpForm() {
  clearForm("#su");
}

function clearSignInForm() {
  clearForm("#si");
}

function clearForm(modalId) {
  let inputs = document.querySelectorAll(`${modalId} input`);
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }

  let spans = document.querySelectorAll(`${modalId} span`);
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = "";
  }
}

// check su lưu vào localstorage sau su
document.querySelector("#su .btn-f-sign").addEventListener("click", function () {
  checkTenSU();
  checkHoSU();
  checkEmailSu();
  checkPassWordSu();

  let isValid =
    document.querySelector(".sp-ten-su").style.color === "green" &&
    document.querySelector(".sp-ho-su").style.color === "green" &&
    document.querySelector(".sp-email-su").style.color === "green" &&
    document.querySelector(".sp-pass-su").style.color === "green";

  if (!isValid) {
    alert("Vui lòng nhập đúng đầy đủ thông tin!");
    return;
  }

  // Lấy dữ liệu từ input
  let ten = document.querySelector(".ten-su").value;
  let ho = document.querySelector(".ho-su").value;
  let email = document.querySelector(".email-su").value;
  let password = document.querySelector(".pass-su").value;

  // Lấy danh sách người dùng từ localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Kiểm tra email đã tồn tại chưa
  let isExist = users.some((user) => user.email === email);

  if (isExist) {
    let spEmail = document.querySelector(".sp-email-su");
    spEmail.style.color = "red";
    spEmail.innerHTML = "Email này đã được đăng ký. Vui lòng dùng email khác.";
    return;
  }

  // Thêm người dùng mới
  let newUser = {
    ho: ho,
    ten: ten,
    email: email,
    password: password,
  };
  users.push(newUser);

  // Lưu lại vào localStorage
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công!");
  clearSignUpForm();
  // close modal su
  const modal = bootstrap.Modal.getInstance("#su");
  modal.hide();
});

// check si từ localstorage
document.querySelector("#si .btn-f-sign").addEventListener("click", function () {
  checkEmailSi();
  checkPassWordSi();

  let isValid = document.querySelector(".sp-email-si").style.color === "green" && document.querySelector(".sp-pass-si").style.color === "green";

  if (!isValid) {
    alert("Vui lòng nhập đúng thông tin đăng nhập!");
    return;
  }

  let email = document.querySelector(".email-si").value;
  let password = document.querySelector(".pass-si").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let matchedUser = users.find((user) => user.email === email && user.password === password);

  if (matchedUser) {
    alert(`Đăng nhập thành công! Xin chào ${matchedUser.ho} ${matchedUser.ten}`);

    // Lưu thông tin đăng nhập vào localStorage(hiện si)
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

    document.querySelector(".btn-si").style.display = "none";
    document.querySelector(".btn-su").style.display = "none";
    document.querySelector(".after-si").style.display = "inline-block";
    document.querySelector(".after-si").innerHTML = `Xin chào ${matchedUser.ho} ${matchedUser.ten}`;
    document.querySelector(".btn-so").style.display = "inline-block";

    document.querySelector(".btn-so").addEventListener("click", function () {
      // Xoá thông tin đăng nhập khi đăng xuất
      localStorage.removeItem("loggedInUser");
      location.reload();
    });

    clearSignInForm();
    // close modal si
    const modal = bootstrap.Modal.getInstance("#si");
    modal.hide();
  } else {
    let spEmail = document.querySelector(".sp-email-si");
    let spPass = document.querySelector(".sp-pass-si");
    spEmail.style.color = "red";
    spPass.style.color = "red";
    spEmail.innerHTML = "Email hoặc mật khẩu không đúng";
    spPass.innerHTML = "Email hoặc mật khẩu không đúng";
  }
});

// phần đổi text của product modal
document.querySelectorAll(".card").forEach(function (card) {
  card.addEventListener("click", function () {
    // Lấy thông tin từ data-*
    const img = this.getAttribute("data-img");
    const title = this.getAttribute("data-title");
    const desc = this.getAttribute("data-desc");
    const type = this.getAttribute("data-type");
    const price = this.getAttribute("data-price");
    const protein = this.getAttribute("data-protein");
    const fat = this.getAttribute("data-fat");
    const calcium = this.getAttribute("data-calcium");
    const omega = this.getAttribute("data-omega");

    // Gán lại nội dung trong modal
    document.querySelector(".pro-img").src = img;
    document.querySelector(".loaisp").textContent = "Loại Sản Phẩm : " + type;
    document.querySelector(".tieude").textContent = "Tên : " + title;
    document.querySelector(".mota").textContent = "Mô Tả : " + desc;
    document.querySelector(".modal-title").textContent = title;
    document.querySelector(".price").textContent = price;

    // Cập nhật thông tin dinh dưỡng trong modal
    const infoList = document.querySelectorAll(".thongtin li");
    infoList[0].textContent = "Chất đạm thô (Min): " + protein;
    infoList[1].textContent = "Chất béo thô (Min): " + fat;
    infoList[2].textContent = "Canxi (Min – Max): " + calcium;
    infoList[3].textContent = "Omega 3: 6: 9 (Min): " + omega;

    // Reset lại số lượng về 1 nếu muốn
    document.querySelector(".space").value = 1;

    // Gán lại cho nút thêm vào giỏ
    document.querySelector(".btn-giohang").dataset.img = img;
    document.querySelector(".btn-giohang").dataset.title = title;
    document.querySelector(".btn-giohang").dataset.price = price;
  });
});

// sự kiện +-
let cong = document.querySelector(".btn-cong");
let tru = document.querySelector(".btn-tru");
let input = document.querySelector(".space");
cong.addEventListener("click", function () {
  input.value++;
});
tru.addEventListener("click", function () {
  input.value--;
  if (input.value < 0) {
    input.value = 0;
  }
});

//Thêm Vào Giỏ Hàng của nút thêm vào giỏ hàng
document.querySelector(".btn-giohang").addEventListener("click", function () {
  const img = document.querySelector(".pro-img").getAttribute("src");
  const title = document.querySelector(".tieude").innerText;
  const price = document.querySelector(".price").innerText;
  const quantity = parseInt(document.getElementById("sp").value);

  // Tính tổng tiền (chuyển giá về dạng số)
  const priceNumber = parseInt(price.replace(/\D/g, "")); // bỏ dấu . và đ
  const total = priceNumber * quantity;

  const item = {
    img,
    title,
    price,
    quantity,
    total,
  };

  // Lấy giỏ hàng hiện tại từ localStorage
  const food = JSON.parse(localStorage.getItem("food")) || [];

  // Thêm sản phẩm vào giỏ
  food.push(item);

  // Lưu lại vào localStorage
  localStorage.setItem("food", JSON.stringify(food));

  // alert("Thêm Vào Giỏ Hàng Thành Công");
  window.location.href = "../html/Shopping.html";
});

//thêm Vào Giỏ Hàng của nút mua ngay
document.querySelector(".btn-muangay").addEventListener("click", function () {
  const img = document.querySelector(".pro-img").getAttribute("src");
  const title = document.querySelector(".tieude").innerText;
  const price = document.querySelector(".price").innerText;
  const quantity = parseInt(document.getElementById("sp").value);

  // Tính tổng tiền (chuyển giá về dạng số)
  const priceNumber = parseInt(price.replace(/\D/g, "")); // bỏ dấu . và đ
  const total = priceNumber * quantity;

  const item = {
    img,
    title,
    price,
    quantity,
    total,
  };

  // Lấy giỏ hàng hiện tại từ localStorage
  const food = JSON.parse(localStorage.getItem("food")) || [];

  // Thêm sản phẩm vào giỏ
  food.push(item);

  // Lưu lại vào localStorage
  localStorage.setItem("food", JSON.stringify(food));
  window.location.href = "../html/Pay.html"; // Cập nhật đường dẫn đúng nếu khác
});
