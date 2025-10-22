/*DANH SÁCH PHIM*/
const movies = [
  {
    id: 1,
    title: "Tử Chiến Trên Không-T16",
    poster: "./../Images/Posters/TuChienTrenKhong.jpg",
    basicInfo: "Hành động   118 phút   Đạo diễn: Lê Nhật Quang",
    actor: "Thái Hòa, Kaity Nguyễn, Thanh Sơn,...",
    startDate: "19/09/2025",
    description: "\"Tử Chiến Trên Không\" kể về Bình, chuyên viên cảnh vệ hàng không, vô tình rơi vào cuộc đối đầu sinh tử khi chuyến bay anh đi bị nhóm không tặc do Long cầm đầu khống chế. Trong 15 phút sau khi cất cánh, máy bay trở thành chiến trường. Bình cùng phi hành đoàn và hành khách phải phối hợp chống trả, ngăn chặn âm mưu tàn độc của bọn cướp, bảo vệ tính mạng mọi người giữa bầu trời không lối thoát.",
    ageLimit: 16,
    trailer: "https://www.youtube.com/watch?v=-ZbE7fJxGSM"
  },
  {
    id: 2,
    title: "Chú Thuật Hồi Chiến: Hoài ngọc/Ngọc chiết-The movie-T13",
    poster: "./../Images/Posters/ChuThuatHoiChien.jpg",
    basicInfo: "Hoạt hình   110 phút   Đạo diễn: Shouta Goshozono",
    actor: "Aya Endô, Takehito Koyasu, Anna Nagase",
    startDate: "10/10/2025",
    description: "THE MOVIE “CHÚ THUẬT HỒI CHIẾN: HOÀI NGỌC / NGỌC CHIẾT” là phần phim đặc biệt với phiên bản chiếu rạp đưa khán giả quay về khoảng thời gian vĩnh viễn không trở lại, chứng kiến tuổi trẻ rực lửa khi Gojo và Geto còn kề vai sát cánh, cùng nhau khắc ghi dấu ấn không thể xóa nhòa. “Sau tất cả, chúng ta vẫn là người mạnh nhất!",
    ageLimit: 13,
    trailer: "https://www.youtube.com/watch?v=cPs3j9LNCjY"
  },
  {
    id: 3,
    title: "Cậu Bé Cá Heo Và Bí Mật 7 Đại Dương-P",
    poster: "./../Images/Posters/CauBeCaHeo.png",
    basicInfo: "Hoạt hình   96 phút   Đạo diễn: Mohammad Kheirandish",
    actor: ".",
    startDate: "03/10/2025",
    description: "Dưới lòng đại dương xanh thẳm, Cậu Bé Cá Heo - người hùng được cả biển cả yêu thương lại day dứt với câu hỏi mình là ai và đến từ đâu, nhưng chưa kịp tìm ra lời giải thì kẻ thù cũ đã trở lại, tạo nên quái vật cua khổng lồ gieo rắc hiểm nguy lên đảo và biển sâu. Trước thử thách lớn nhất đời mình, cậu phải vừa tìm ra sự thật về bản thân, vừa sát cánh cùng những người bạn thân thiết để bảo vệ thế giới đại dương yên bình, mở ra một hành trình kỳ thú tràn ngập màu sắc, tiếng cười và những thông điệp đẹp đẽ về tình bạn, tình cảm gia đình và lòng dũng cảm.",
    ageLimit: "P",
    trailer: "https://www.youtube.com/watch?v=wmhAcwYZk2k"
  },
  {
    id: 4,
    title: "Trò Chơi Ảo Giác: Ares (2D) -T13",
    poster: "./../Images/Posters/TroChoiAoGiac.png",
    basicInfo: "Hành động   118 phút   Đạo diễn: Joachim Rønning",
    actor: "Gillian Anderson, Jeff Bridges, Jared Leto",
    startDate: "10/10/2025",
    description: "“Trò Chơi Ảo Giác: Ares” theo chân Ares – một thực thể ảo cực kỳ tinh vi được cử từ thế giới số đến thế giới thực trong một nhiệm vụ nguy hiểm, đánh dấu cuộc chạm trán đầu tiên giữa loài người và những thực thể trí tuệ nhân tạo.",
    ageLimit: 13,
    trailer: "https://www.youtube.com/watch?v=M_zPlGODg4k&embeds_referring_euri=https%3A%2F%2Fchieuphimquocgia.com.vn%2F&source_ve_path=MjM4NTE"
  },
  {
    id: 5,
    title: "Tay Anh Giữ Một Vì Sao-K",
    poster: "./../Images/Posters/TayAnhGiuMotViSao.png",
    basicInfo: "Hài hước, Lãng mạn   117 phút   Đạo diễn: Kim Sung Hoon",
    actor: "Lee Kwang Soo, Hoàng Hà, Duy Khánh, Cù Thị Trà,...",
    startDate: "03/10/2025",
    description: "Siêu sao Kang Jun Woo – “Hoàng tử Châu Á” – rơi vào tình cảnh “mắc kẹt” tại Việt Nam sau một loạt sự cố dở khóc dở cười, nơi anh gặp Thảo – một cô gái bán cà phê đầy đam mê, quyết tâm theo đuổi ước mơ của mình.",
    ageLimit: "K",
    trailer: "https://www.youtube.com/watch?v=W20Ualdca3E"
  },
  {
    id: 6,
    title: "Tee Yod: Quỷ Ăn Tạng 3 - T16",
    poster: "./../Images/Posters/QuyAnTang.jpg",
    basicInfo: "Hành động   104 phút   Đạo diễn: Narit Yuvaboon",
    actor: "Nadech Kugimiya, Denise Jelilcha Kapaun,...",
    startDate: "10/10/2025",
    description: "Yak và gia đình phải đối mặt với nỗi kinh hoàng mới khi “Yee” – cô em út – đột ngột mất tích bí ẩn. Yak buộc phải cùng Yos, Yod và Papan lên đường đến “Bong Sa Noh Bian” – khu rừng ma ám – để cứu Yee trước khi những linh hồn tà ác một lần nữa bị đánh thức.",
    ageLimit: 16,
    trailer: "https://www.youtube.com/watch?v=DMOGnGokm4c"
  },
  {
    id: 7,
    title: "Nhận Diện - T16",
    poster: "./../Images/Posters/NhanDien.png",
    basicInfo: "Hồi hộp, Ly kì   102 phút   Đạo diễn: Yeon Sang-Ho",
    actor: ".",
    startDate: "03/10/2025",
    description: "Im Dong-hwan, một chàng trai chưa bao giờ biết mặt mẹ mình, bàng hoàng khi cảnh sát thông báo đã tìm thấy hài cốt của bà - người đã mất tích suốt 40 năm - với nghi ngờ bị sát hại. Anh quyết tâm đi tìm sự thật cùng nữ đạo diễn Kim Soo-jin, người đang thực hiện phim tài liệu về cha anh, một nghệ nhân làm dấu mù lòa từ khi sinh ra. Họ lần theo kí ức của những người từng làm việc với bà tại xưởng may năm xưa, để dần vén màn bí mật được chôn giấu suốt bốn thập kỷ.",
    ageLimit: 16,
    trailer: "https://www.youtube.com/watch?v=2kgLMLIj0YU"
  },
  {
    id: 8,
    title: "Cục Vàng Của Ngoại-T13",
    poster: "./../Images/Posters/CucVangCuaNgoai.jpg",
    basicInfo: "Hành động   118 phút   Đạo diễn: Khương Ngọc",
    actor: "Việt Hương, Hồng Đào, Lê Khánh,...",
    startDate: "17/10/2025",
    description: "Lấy cảm hứng từ những ký ức tuổi thơ ngọt ngào, “Cục Vàng Của Ngoại” mang đến câu chuyện ấm áp về tình bà cháu trong một xóm nhỏ chan chứa nghĩa tình.",
    ageLimit: 13,
    trailer: "https://www.youtube.com/embed/l0DA0vKjVFs"
  },
  {
    id: 9,
    title: "Chị Ngã Em Nâng - T13",
    poster: "./../Images/Posters/ChiNgaEmNang.jpg",
    basicInfo: "Hài hước, li kì   118 phút   Đạo diễn: Vũ Thành Vinh",
    actor: "Lê Khánh, Quốc Trường, Thuận Nguyễn, Uyển Ân.",
    startDate: "03/10/2025",
    description: "Chị Ngã Em Nâng là câu chuyện cảm động xoay quanh hai chị em Thương và Lực – lớn lên trong một gia đình gắn bó với nghề làm nhang truyền thống. Biến cố xảy ra từ sớm khiến Thương trở thành chỗ dựa duy nhất cho em trai, vừa làm chị, vừa gánh vai trò của cha mẹ. Lớn lên trong điều kiện không đủ đầy, nhưng với bản lĩnh cùng những lời dạy ăn sâu vào tâm thức mà cha mẹ dành cho Thương, cô đã kiên trì đầy nghị lực để quyết tâm thay đổi cuộc sống. Thương thành công và kỳ vọng em trai đi theo con đường mình đã lựa chọn. Tuy nhiên, sự áp đặt vô tình tạo nên rạn nứt, đẩy hai chị em vào những mâu thuẫn sâu sắc – thậm chí đến mức đối mặt sinh tử.",
    ageLimit: 13,
    trailer: "https://www.youtube.com/watch?v=gGaiJAaEruQ"
  },
  {
    id: 10,
    title: "Chainsaw Man-The movie:Chương REZE-T18",
    poster: "./../Images/Posters/ChainsawMan.jpg",
    basicInfo: "Hoạt hình   100 phút   Đạo diễn: Tatsuya Yoshihara",
    actor: "Kikunosuke Toya, Tomori Kusunoki, Shôgo Sakata.",
    startDate: "26/09/2025",
    description: "Tiếp nối series anime chuyển thể đình đám, Chainsaw Man lần đầu tiên oanh tạc màn ảnh rộng trong một cuộc phiêu lưu hoành tráng, ngập tràn các phân cảnh hành động. Ở phần trước, ta đã biết Denji từng làm Thợ Săn Quỷ cho yakuza để trả món nợ của cha mẹ nhưng bị họ phản bội và trừ khử. Trong khoảnh khắc hấp hối, chú chó quỷ cưa máy Pochita (người bạn đồng hành trung thành của Denji).",
    ageLimit: 18,
    trailer: "https://www.youtube.com/watch?v=tAzAhDNdehs"
  }
];

/*NGÀY VÀ GIỜ */
const movieSchedules = [
  {
    title: "Tử Chiến Trên Không-T16",
    dates: [
      {date: "16-10-2025", times: ["13:00", "14:50", "16:40", "18:50", "21:30", "23:10"]},
      {date: "17-10-2025", times: ["14:50", "18:50", "21:30", "23:10"]},
      {date: "18-10-2025", times: ["14:50", "23:10"]},
    ]
  },
  {
    title: "Chú Thuật Hồi Chiến: Hoài ngọc/Ngọc chiết-The movie-T13",
    dates: [
      {date: "16-10-2025", times: ["13:00", "14:50", "16:40", "18:50", "21:30", "23:10"]},
      {date: "17-10-2025", times: ["14:50", "18:50", "21:30", "23:10"]},
      {date: "18-10-2025", times: ["14:50", "23:10"]},
    ]
  },
  {
    title: "Cậu Bé Cá Heo Và Bí Mật 7 Đại Dương-P",
    dates: [
      {date: "16-10-2025", times: ["13:00", "14:50", "16:40", "18:50", "21:30", "23:10"]},
      {date: "17-10-2025", times: ["14:50", "18:50", "21:30", "23:10"]},
      {date: "18-10-2025", times: ["14:50", "23:10"]},
    ]
  },
  {
    title: "Trò Chơi Ảo Giác: Ares (2D) -T13",
    dates: [
      {date: "16-10-2025", times: ["13:00", "14:50", "16:40", "18:50", "21:30", "23:10"]},
      {date: "17-10-2025", times: ["14:50", "18:50", "21:30", "23:10"]},
      {date: "18-10-2025", times: ["14:50", "23:10"]},
    ]
  },
  {
    title: "Tay Anh Giữ Một Vì Sao-K",
    dates: [
      {date: "16-10-2025", times: ["13:00", "14:50", "16:40", "18:50", "21:30", "23:10"]},
      {date: "17-10-2025", times: ["14:50", "18:50", "21:30", "23:10"]},
      {date: "18-10-2025", times: ["14:50", "23:10"]},
    ]
  },
  {
    title: "Tee Yod: Quỷ Ăn Tạng 3 - T16",
    dates: [
      {date: "16-10-2025", times: ["13:00", "14:50", "16:40", "18:50", "21:30", "23:10"]},
      {date: "17-10-2025", times: ["14:50", "18:50", "21:30", "23:10"]},
      {date: "18-10-2025", times: ["14:50", "23:10"]},
    ]
  },
  {
    title: "Nhận Diện - T16",
    dates: [
      {date: "16-10-2025", times: ["13:00", "14:50", "16:40", "18:50", "21:30", "23:10"]},
      {date: "17-10-2025", times: ["14:50", "18:50", "21:30", "23:10"]},
      {date: "18-10-2025", times: ["14:50", "23:10"]},
    ]
  },
  {
    title: "Cục Vàng Của Ngoại-T13",
    dates: [
      {date: "16-10-2025", times: ["13:00", "14:50", "16:40", "18:50", "21:30", "23:10"]},
      {date: "17-10-2025", times: ["14:50", "18:50", "21:30", "23:10"]},
      {date: "18-10-2025", times: ["14:50", "23:10"]},
    ]
  },
  {
    title: "Chị Ngã Em Nâng - T13",
    dates: [
      {date: "16-10-2025", times: ["13:00", "14:50", "16:40", "18:50", "21:30", "23:10"]},
      {date: "17-10-2025", times: ["14:50", "18:50", "21:30", "23:10"]},
      {date: "18-10-2025", times: ["14:50", "23:10"]},
    ]
  },
  {
    title: "Chainsaw Man-The movie:Chương REZE-T18",
    dates: [
      {date: "16-10-2025", times: ["13:00", "14:50", "16:40", "18:50", "21:30", "23:10"]},
      {date: "17-10-2025", times: ["14:50", "18:50", "21:30", "23:10"]},
      {date: "18-10-2025", times: ["14:50", "23:10"]},
    ]
  },
]

/*GẮN BIẾN*/
const movieList = document.getElementById("movies-container");
const movieDetail = document.getElementById("movie-detail");
const movieInfo = document.getElementById("movie-info");
const backToList = document.getElementById("back-to-list");
const trailer = document.getElementById("trailer-button");
const dates = document.getElementById("dates");
const times = document.getElementById("times");
const seatSection = document.getElementById("seat-selection");
const screen = document.getElementById("screen");
const timeSelected = document.getElementById("time-selected");
const normalSeatTop = document.getElementById("normal-seat-top");
const normalSeatBottom = document.getElementById("normal-seat-bottom");
const vipSeat = document.getElementById("vip-seat");
const coupleSeat = document.getElementById("couple-seat");
const seatNote = document.querySelector(".seat-note");
const noteText = document.querySelectorAll(".inside-item");

/*HÀM HIỂN THỊ DANH SÁCH PHIM*/
function renderMovie() {
    movieList.innerHTML = "";
    movies.forEach(function(movie) {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `
        <img src = "${movie.poster}" alt = "${movie.title}">
        <h3>${movie.title}</h3>
        `;
        card.addEventListener("click", function() {
          showMovieDetail(movie);
          showSchedule(movie);
        });
        movieList.appendChild(card);
    });
}
renderMovie();

/*HÀM CHI TIẾT PHIM */
function showMovieDetail(movie) {
    document.getElementById("movie-list").classList.add("hidden");
    movieDetail.classList.remove("hidden");

    let ageText = "";
    if(movie.ageLimit === "P") {
      ageText = "Kiểm duyệt: P - PHIM ĐƯỢC PHÉP PHỔ BIẾN ĐẾN NGƯỜI XEM Ở MỌI ĐỘ TUỔI."
    }
    else if(movie.ageLimit === "K") {
      ageText = "Kiểm duyệt: K - Phim được phổ biến đến khán giả dưới 13 tuổi với điều kiện xem cùng cha, mẹ hoặc người giám hộ."
    }
    else if(movie.ageLimit === 13) {
      ageText = "Kiểm duyệt: T13 - Phim được phổ biến đến người xem từ đủ 13 tuổi trở lên (13+)";
    }
    else if(movie.ageLimit === 16) {
      ageText = "Kiểm duyệt: T16 - Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên (16+)";
    }
    else if(movie.ageLimit === 18) {
      ageText = "Kiểm duyệt: T18 - Phim được phổ biến đến người xem từ đủ 18 tuổi trở lên (18+)";
    }

    movieInfo.innerHTML = `
    <div class = "movie-detail-container">
        <img src = "${movie.poster}" alt = "${movie.title}">
        <div>
            <div class = "header-movie-detail">${movie.title}</div>
            <div class = "movie-description">
              <div class = "basic-info">${movie.basicInfo}</div>
              <div class = "actor">Diễn viên: ${movie.actor}</div>
              <div class = "start-date">Khởi chiếu: ${movie.startDate}</div>
              <div class = "description">${movie.description}</div>
            </div>
            <div class = "age-limit">${ageText}</div>
            <div class = "movie-detail-buttons">
              <button id = "trailer-button">Xem Trailer</button>
            </div>
        </div>
    </div>
    `;

    document.getElementById("trailer-button").addEventListener("click", function() {
      window.open(movie.trailer, "_blank");
    });
}

/*HÀM HIỆN THỊ CHỌN NGÀY VÀ GIỜ*/
function showSchedule(movie) {
  const scheduleContainer = document.getElementById("schedule-container");
  scheduleContainer.classList.remove("hidden");
  dates.innerHTML = "";
  times.innerHTML = "";

  const movieTitle = movieSchedules.find(m => m.title === movie.title);
  if(!movieTitle) {
    document.getElementById("dates").innerHTML = "Không tìm thấy phim";
    return;
  }

/*HÀM TẠO NGÀY */
  movieTitle.dates.forEach((dateContainer, count) => {
    const dateBlock = document.createElement("div");
    dateBlock.classList.add("date-block");
    dateBlock.innerHTML = `
      <p>${dateContainer.date}</p>
    `;
/*MẶC ĐỊNH CHỌN NGÀY ĐẦU TIÊN */
    if(count === 0) {
      showTime(dateContainer);
      dateBlock.classList.add("date-selected");
    }

    dateBlock.addEventListener("click", function() {
      document.querySelectorAll(".date-block").forEach(block => {
        block.classList.remove("date-selected");
      }) 
      dateBlock.classList.add("date-selected");

      times.innerHTML = "";

      showTime(dateContainer);
    })
    dates.appendChild(dateBlock);
  });
}

/*HÀM TẠO GIỜ*/
function showTime(dateContainer) {
  dateContainer.times.forEach(timeContainer => {
    const timeBlock = document.createElement("div");
    timeBlock.classList.add("time-block");
    timeBlock.innerHTML = `
      <span>${timeContainer}</span>
    `
    times.appendChild(timeBlock);

    timeBlock.addEventListener("click", function() {
      disappear(times);
      disable(dates);

      showSeat(timeContainer);
      showSelectedSeats();
      calculateTotalCost();
      paymentButton();
      screen.classList.remove("hidden");
      [".inside-item-booked", ".inside-item-selected", ".inside-item-available", ".inside-item-vip", ".inside-item-couple"].forEach(function(part) {
        document.querySelector(part)?.classList.remove("hidden");
      })
      noteText.forEach(function(note) {
        note.classList.remove("hidden");
      })

      document.getElementById("selected-seats").classList.remove("hidden");
      document.getElementById("total-price").classList.remove("hidden");
      document.getElementById("back-to-date").classList.remove("hidden");
      document.getElementById("payment").classList.remove("hidden");
    });
  });
}

function disappear(obj) {
  obj.classList.add("hidden");
}

function reverseDisappear(obj) {
  obj.classList.remove("hidden");
}

function disable(obj) {
  obj.classList.add("disabled");
}

function reverseDisable(obj) {
  obj.classList.remove("disabled");
}

/*HÀM TẠO LAYOUT GHẾ */
function showSeat(time) {
  timeSelected.innerHTML = `
    <span>Giờ chiếu: </span> <span>${time}</span>
  `
  screen.classList.remove("hidden");
  createSeats(normalSeatTop, "A", 3, 14, 0);
  createSeats(vipSeat, "D", 5, 4, 10);
  createCoupleSeats(coupleSeat, "I", 1, 12);
}

/*HÀM TẠO HÀNG GHẾ/ GHÊ VIP*/
function createSeats(container, startLetter, rowCount, normalSeatPerRow, vipSeatPerRow) {
  for(let i = 0; i < rowCount; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    const rowLabel = String.fromCharCode(startLetter.charCodeAt(0) + i);

    const offSetLeft = Math.floor(normalSeatPerRow / 2);
    const offSetRight = normalSeatPerRow - offSetLeft;

    let seatNumber = 1;

    for(let j = 0; j < offSetLeft; j++) {
      const seat = createSingleSeat(rowLabel, seatNumber, "normal-seat", 80000);
      seatNumber++;
      row.appendChild(seat);
    }

    for(let j = 0; j < vipSeatPerRow; j++) {
      const seat = createSingleSeat(rowLabel, seatNumber, "vip-seat", 85000);
      seatNumber++;
      row.appendChild(seat);
    }

    for(let j = 0; j < offSetRight; j++) {
      const seat = createSingleSeat(rowLabel, seatNumber, "normal-seat", 80000);
      seatNumber++;
      row.appendChild(seat);
    }

    container.appendChild(row);
  }
}

/*HÀM TẠO HÀNG GHẾ COUPLE */
function createCoupleSeats(container, startLetter, rowCount, seatPerRow) {
  for(let i = 0; i < rowCount; i++) {
    const row = document.createElement("div");
    row.classList.add("couple-row");

    const rowLabel = String.fromCharCode(startLetter.charCodeAt(0) + i);
    for(let j = 1; j <= seatPerRow; j++) {
      const seat = createSingleSeat(rowLabel, j, "couple-seat", 180000);
      row.appendChild(seat);
    }

    container.appendChild(row);
  }
}

/*HÀM TẠO GHẾ */
function createSingleSeat(rowLabel, seatNumber, className, price) {
  const seat = document.createElement("div");
  seat.classList.add(className, "available");
  seat.dataset.price = price;
  seat.innerHTML = `
    <span>${rowLabel}${seatNumber}</span>
  `;

  seat.addEventListener("click", function() {
    if(seat.classList.contains("unavailable")) {
      return;
    }
    seat.classList.toggle("selected-seat");
    showSelectedSeats();
    calculateTotalCost();
    paymentButton();
  });

  return seat;
}

/*NÚT QUAY LẠI */
backToList.addEventListener ("click", function() {
  dates.innerHTML = "";
  timeSelected.innerHTML = "";
  normalSeatTop.innerHTML = "";
  normalSeatBottom.innerHTML = "";
  vipSeat.innerHTML = "";
  coupleSeat.innerHTML = "";

  seatNote.classList.add("hidden");
  screen.classList.add("hidden");
  document.getElementById("back-to-date").classList.add("hidden");
  document.getElementById("payment").classList.add("hidden");
  document.getElementById("movie-list").classList.remove("hidden");
  document.getElementById("selected-seats").classList.add("hidden");
  document.getElementById("total-price").classList.add("hidden");
  movieDetail.classList.add("hidden");

  [".inside-item-booked", ".inside-item-selected", ".inside-item-available", ".inside-item-vip", ".inside-item-couple"].forEach(function(part) {
    document.querySelector(part)?.classList.add("hidden");
  });
  noteText.forEach(function(note) {
    note.classList.add("hidden");
  });

  reverseDisable(dates);
  reverseDisappear(times);

  const selectedSeats = document.querySelectorAll(".selected-seats");
  selectedSeats.forEach(function(seat) {
    seat.classList.remove(".selected-seats");
  });
})

/*HÀM HIỂN THỊ GHẾ ĐÃ CHỌN */
function showSelectedSeats() {
  const selectedSeats = document.querySelectorAll(".selected-seat");

  const seatNames = [];
  
  selectedSeats.forEach(function(seat) {
    seatNames.push(seat.textContent.trim());
  });
  document.getElementById("selected-seats").innerHTML = `
    <span>Ghế đã chọn: ${seatNames.join(", ")}</span>
  `
}

/*HÀM TỈNH TỔNG TIỀN*/
function calculateTotalCost() {
  const selectedSeats = document.querySelectorAll(".selected-seat");
  let total = 0;

  selectedSeats.forEach(function(seat) {
    total += parseInt(seat.dataset.price);
  });

  document.getElementById("total-price").innerHTML = `
    <span>Tổng tiền: ${total.toLocaleString("vi-VN")}đ</span>
  `
}

/*NÚT QUAY LẠI CHỌN NGÀY */
const backToDate = document.getElementById("back-to-date");
backToDate.addEventListener("click", function() {
  reverseDisable(dates);
  reverseDisappear(times);

  timeSelected.innerHTML = "";
  normalSeatTop.innerHTML = "";
  normalSeatBottom.innerHTML = "";
  vipSeat.innerHTML = "";
  coupleSeat.innerHTML = "";

  screen.classList.add("hidden");
  [".inside-item-booked", ".inside-item-selected", ".inside-item-available", ".inside-item-vip", ".inside-item-couple"].forEach(function(part) {
    document.querySelector(part)?.classList.add("hidden");
  });
  noteText.forEach(function(note) {
    note.classList.add("hidden");
  });
  document.getElementById("back-to-date").classList.add("hidden");
  document.getElementById("payment").classList.add("hidden");
  document.getElementById("selected-seats").classList.add("hidden");
  document.getElementById("total-price").classList.add("hidden");

  const selectedSeats = document.querySelectorAll(".selected-seats");
  selectedSeats.forEach(function(seat) {
    seat.classList.remove(".selected-seats");
  });
})

/*NÚT THANH TOÁN */
function paymentButton() {
  const selectedSeats = document.querySelectorAll(".selected-seat");
  const payment = document.getElementById("payment");

  if(selectedSeats.length === 0) {
    payment.classList.add("payment-wo-seat");
    payment.classList.remove("payment-w-seats");
  }
  else {
    payment.classList.remove("payment-wo-seat");
    payment.classList.add("payment-w-seats");
  };
}
paymentButton();

/*MÃ QR */
document.getElementById("payment").addEventListener("click", function() {
  document.getElementById("qr-popup").classList.remove("hidden");
});

document.getElementById("close-qr").addEventListener("click", function() {
  document.getElementById("qr-popup").classList.add("hidden");
});