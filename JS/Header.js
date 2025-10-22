// Lấy các phần tử HTML bằng id để thao tác
const nenMo = document.getElementById("nenMo");       // Nền mờ hiển thị form
const tieuDeForm = document.getElementById("tieuDeForm"); // Tiêu đề form ("Đăng nhập" hoặc "Đăng ký")
const chuyenDangKy = document.getElementById("chuyenDangKy"); // Link chuyển giữa đăng nhập/đăng ký
const nutXacNhan = document.getElementById("nutXacNhan"); // Nút xác nhận (Đăng nhập/Đăng ký)
const nutDangNhap = document.getElementById("nutDangNhap"); // Nút mở form đăng nhập
const nutDangKy = document.getElementById("nutDangKy");     // Nút mở form đăng ký
const nutDong = document.getElementById("nutDong");         // Nút đóng form
const thanhtren = document.getElementById("thanhtren");     // Thanh trên (header)

// Biến trạng thái form: true = Đăng nhập, false = Đăng ký
let cheDoDangNhap = true;

// Khi bấm nút Đăng nhập
nutDangNhap.onclick = () => {
  cheDoDangNhap = true;                       // Chuyển sang chế độ đăng nhập
  tieuDeForm.textContent = "Đăng nhập";       // Đổi tiêu đề form
  nutXacNhan.textContent = "Đăng nhập";       // Đổi nút xác nhận
  chuyenDangKy.innerHTML = '<a id="chuyenDangKy">Đăng ký</a>'; // Đổi link sang "Đăng ký"
  nenMo.style.display = "flex";               // Hiện nền mờ
  setTimeout(() => nenMo.classList.add("show"), 10); // Thêm hiệu ứng fade-in
};

// Khi bấm nút Đăng ký
nutDangKy.onclick = () => {
  cheDoDangNhap = false;                      // Chuyển sang chế độ đăng ký
  tieuDeForm.textContent = "Đăng ký";         // Đổi tiêu đề form
  nutXacNhan.textContent = "Đăng ký";         // Đổi nút xác nhận
  chuyenDangKy.innerHTML = '<a id="chuyenDangKy">Đăng nhập</a>'; // Đổi link sang "Đăng nhập"
  nenMo.style.display = "flex";               // Hiện nền mờ
  setTimeout(() => nenMo.classList.add("show"), 10); // Thêm hiệu ứng fade-in
};

// Khi bấm nút đóng form
nutDong.onclick = () => {
  nenMo.classList.remove("show");             // Bỏ hiệu ứng show
  setTimeout(() => nenMo.style.display = "none", 200); // Ẩn nền mờ sau 0.2s
};

// Chuyển đổi giữa Đăng nhập ↔ Đăng ký khi click vào link
document.addEventListener("click", (e) => {
  if (e.target.id === "chuyenDangKy") {       // Nếu click vào link
    cheDoDangNhap = !cheDoDangNhap;           // Đổi chế độ ngược lại
    tieuDeForm.textContent = cheDoDangNhap ? "Đăng nhập" : "Đăng ký"; // Đổi tiêu đề
    nutXacNhan.textContent = cheDoDangNhap ? "Đăng nhập" : "Đăng ký"; // Đổi nút xác nhận
    chuyenDangKy.innerHTML = cheDoDangNhap    // Đổi link sang tùy chế độ
      ? '<a id="chuyenDangKy">Đăng ký</a>'
      : '<a id="chuyenDangKy">Đăng nhập</a>';
  }
});

// Khi bấm nút xác nhận (Đăng nhập hoặc Đăng ký)
nutXacNhan.onclick = () => {
  const ten = document.getElementById("tenDangNhap").value.trim(); // Lấy tên người dùng
  const mk = document.getElementById("matKhau").value.trim();       // Lấy mật khẩu
  if (!ten || !mk) return alert("Vui lòng nhập đầy đủ thông tin!"); // Nếu thiếu, báo lỗi

  // Trường hợp đăng ký
  if (!cheDoDangNhap) {
    localStorage.setItem("ten", ten);       // Lưu tên vào localStorage
    localStorage.setItem("mk", mk);         // Lưu mật khẩu vào localStorage
    alert("Đăng ký thành công! Hãy đăng nhập lại."); // Báo thành công
    cheDoDangNhap = true;                   // Chuyển về chế độ đăng nhập
    tieuDeForm.textContent = "Đăng nhập";   // Đổi tiêu đề
    nutXacNhan.textContent = "Đăng nhập";   // Đổi nút xác nhận
  } 
  // Trường hợp đăng nhập
  else {
    const tenDK = localStorage.getItem("ten"); // Lấy tên đã đăng ký
    const mkDK = localStorage.getItem("mk");   // Lấy mật khẩu đã đăng ký
    if (ten === tenDK && mk === mkDK) {        // Nếu đúng tài khoản
      sessionStorage.setItem("nguoiDangNhap", ten); // Lưu vào sessionStorage
      nenMo.classList.remove("show");          // Ẩn form
      setTimeout(() => nenMo.style.display = "none", 200); // Ẩn nền mờ
      capNhatThanhTren();                      // Cập nhật header
    } else alert("Sai tài khoản hoặc mật khẩu!"); // Nếu sai, báo lỗi
  }
};

// Hàm cập nhật thanh trên sau khi đăng nhập
function capNhatThanhTren() {
  const nguoiHienTai = sessionStorage.getItem("nguoiDangNhap"); // Lấy tên đăng nhập hiện tại
  const headerRight = document.querySelector(".header-right");   // Lấy thẻ header-right
  if (nguoiHienTai) {                                           // Nếu có người đăng nhập
    headerRight.innerHTML = `
      <span style="color:white;">Xin chào, <b>${nguoiHienTai}</b></span>
      <a id="nutDangXuat" class="btn-outline">Đăng xuất</a>
    `;
    document.getElementById("nutDangXuat").onclick = () => {     // Khi bấm đăng xuất
      sessionStorage.removeItem("nguoiDangNhap");               // Xóa session
      location.reload();                                        // Reload trang
    };
  }
}

// Gọi hàm ngay khi load trang để kiểm tra người đăng nhập
capNhatThanhTren();

// chuyen chu vang
function capNhatMenuActive() {
  var currentPath = window.location.pathname.split("/").pop(); // Lấy tên file hiện tại
  var links = document.querySelectorAll(".nav-menu a");

  links.forEach(function(link) {
    var linkPath = link.getAttribute("href").split("/").pop(); // Lấy tên file trong href
    if (linkPath === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Gọi khi load trang
capNhatMenuActive();

