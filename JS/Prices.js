const buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const isActive = button.classList.contains("active");

      // Đóng tất cả
      buttons.forEach(btn => {
        btn.classList.remove("active");
        btn.parentElement.nextElementSibling.style.display = "none";
      });

      // Mở phần được click (nếu chưa mở)
      if (!isActive) {
        button.classList.add("active");
        button.parentElement.nextElementSibling.style.display = "block";
      }
    });
  });



//   Nút cuộn trang

const scrollBtn = document.getElementById("scrollTopBtn");

  // Khi người dùng cuộn xuống 300px, hiện nút
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Khi bấm nút, cuộn lên đầu
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // hiệu ứng mượt
    });
  });