// ==== Slide ====
    const slide = document.querySelector('.slide1');
    const imgs = document.querySelectorAll('.slide1 img');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    let index = 0;

    function showSlide(i) {
      if (i < 0) index = imgs.length - 1;
      else if (i >= imgs.length) index = 0;
      else index = i;
      slide.style.transform = `translateX(-${index * 100}%)`;
    }

    next.onclick = () => showSlide(index + 1);
    prev.onclick = () => showSlide(index - 1);
    setInterval(() => showSlide(index + 1), 5000);

