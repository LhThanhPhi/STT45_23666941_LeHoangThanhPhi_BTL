// regex su :sign up
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

//regex si sign in

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
});

// check danh sách trong localstorage
// console.log(localStorage.getItem("users"));
// clear kho localstorage
// localStorage.clear();

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
    clearSignInForm();
  } else {
    let spEmail = document.querySelector(".sp-email-si");
    let spPass = document.querySelector(".sp-pass-si");
    spEmail.style.color = "red";
    spPass.style.color = "red";
    spEmail.innerHTML = "Email hoặc mật khẩu không đúng";
    spPass.innerHTML = "Email hoặc mật khẩu không đúng";
  }
});
// kết thúc phần chung
