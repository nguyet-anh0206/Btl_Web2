const promoDetails = {
  banggia: {
    img: "../Images/Promotion/img1.png",
    title: "BẢNG GIÁ BẮP, NƯỚC MỚI NHẤT 2025",
    desc: `
    Cập nhật bảng giá bắp và nước 2025 với nhiều ưu đãi hấp dẫn!<br><br>
    - Combo 1: 1 bắp + 1 nước chỉ 49.000đ<br>
    - Combo 2: 2 bắp + 2 nước chỉ 89.000đ<br>
    - Combo đặc biệt: 1 bắp lớn + 1 nước lớn + quà tặng kèm chỉ 65.000đ<br><br>
    Áp dụng toàn quốc từ ngày 08/08/2025.`
  },
  u22: {
    img: "../Images/Promotion/img2.png",
    title: "ƯU ĐÃI GIÁ VÉ 55.000Đ/VÉ 2D CHO THÀNH VIÊN U22",
    desc: `
    Dành cho các bạn trẻ dưới 22 tuổi!<br><br>
    Khi mua vé trực tuyến hoặc tại quầy, bạn chỉ cần xuất trình CCCD để nhận ưu đãi 55.000đ/vé 2D.<br>
    Áp dụng từ thứ 2 đến thứ 6 hàng tuần, trừ ngày lễ.`
  },
  garan: {
    img: "../Images/Promotion/img3.png",
    title: "GÀ RÁN SIÊU MÊ LY ĐỒNG GIÁ CHỈ 79K",
    desc: `
    Combo gà rán giòn tan cùng khoai tây chiên và nước ngọt chỉ 79.000đ.<br>
    Hương vị hấp dẫn, thơm ngon, giòn rụm – lựa chọn hoàn hảo cho buổi xem phim của bạn.`
  },
  uudai2025: {
    img: "../Images/Promotion/img4.png",
    title: "TƯNG BỪNG ƯU ĐÃI NĂM 2025",
    desc: `
    Năm mới – Ưu đãi mới!<br><br>
    Giảm 20% giá vé cho mọi suất chiếu từ 01/01 đến 31/01/2025.<br>
    Nhận ngay combo bắp + nước miễn phí khi mua 4 vé trở lên.`
  },
  specialmonday: {
    img: "../Images/Promotion/img5.png",
    title: "SPECIAL MONDAY - ĐỒNG GIÁ 50.000Đ/VÉ 2D THỨ 2 CUỐI THÁNG",
    desc: `
    Thứ 2 cuối mỗi tháng, hãy cùng hội bạn thân tận hưởng phim hay với giá vé chỉ 50.000đ/vé 2D.<br>
    Chương trình áp dụng cho tất cả các rạp thuộc Trung tâm chiếu phim quốc gia.`
  },
  banggia2024: {
    img: "../Images/Promotion/img6.png",
    title: "BẢNG GIÁ BẮP, NƯỚC MỚI NHẤT THÁNG 6",
    desc: `
    Bảng giá bắp nước 202:<br>
    - Combo 1: 45.000đ<br>
    - Combo 2: 80.000đ<br>
    - Combo lớn: 99.000đ<br>
    Ưu đãi 10% cho thành viên đặt vé online.`
  },
  xemtet: {
    img: "../Images/Promotion/img7.png",
    title: "CHÀO TẾT, VÉ XEM PHIM ƯU ĐÃI THẢ GA",
    desc: `
    Tết đến xuân về, xem phim cùng gia đình, bạn bè với ưu đãi cực lớn!<br>
    Vé chỉ 60.000đ cho phim 2D và 80.000đ cho phim 3D.`
  },
  combohay: {
    img: "../Images/Promotion/img8.png",
    title: "SIÊU ƯU ĐÃI 'PHIM THẬT HAY - COMBO THẬT ĐÃ' TRỞ LẠI",
    desc: `
    Combo “Phim thật hay - Combo thật đã” bao gồm:<br>
    - 1 vé xem phim 2D<br>
    - 1 bắp + 1 nước<br>
    Giá chỉ 79.000đ! Áp dụng đến hết tháng 12/2025.`
  }
};

// DOM
const promoList = document.getElementById("promoList");
const promoDetail = document.getElementById("promoDetail");
const detailImg = document.getElementById("detailImg");
const detailTitle = document.getElementById("detailTitle");
const detailDesc = document.getElementById("detailDesc");
const backBtn = document.getElementById("backBtn");

// Khi click ảnh
document.querySelectorAll(".promo-card").forEach(function(card) {
  card.addEventListener("click", function() {
    const id = this.getAttribute("data-id");
    const promo = promoDetails[id];
    if (promo) {
      detailImg.src = promo.img;
      detailTitle.textContent = promo.title;
      detailDesc.innerHTML = promo.desc;
      promoList.classList.add("hidden");
      promoDetail.classList.remove("hidden");
      window.scrollTo(0, 0);
    }
  });
});

// Quay lại danh sách
backBtn.addEventListener("click", function() {
  promoDetail.classList.add("hidden");
  promoList.classList.remove("hidden");
});