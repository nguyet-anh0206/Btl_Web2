// Khi toàn bộ trang web (bao gồm hình ảnh, CSS, v.v.) đã tải xong
window.addEventListener("load", () => {

    // Tìm phần tử có class là "loader" trong HTML
    const loader = document.querySelector(".loader");

    // Thêm class "loader-hidden" để ẩn hiệu ứng loading (thường kèm animation mờ dần)
    loader.classList.add("loader-hidden");

    // Khi hiệu ứng chuyển (transition) kết thúc thì...
    loader.addEventListener("transitionend", () => {

        // ...xóa hoàn toàn phần tử loader khỏi trang (không còn chiếm chỗ trong DOM)
        document.body.removeChild(loader);
    });
});
