
     let slide = document.querySelectorAll(".slide");
     let currentIndex = 0;

     function showSlide(index) {
          slide.forEach((slide, i) => {
               slide.classList.remove("active");
               if (i === index) slide.classList.add("active");
          });
     }

     function nextSlide() {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
     }

     setInterval(nextSlide, 4000); // change every 4 seconds


    const slides = document.querySelectorAll(".slide");
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) slide.classList.add("active");
        });
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    setInterval(nextSlide, 4000); // slide every 4 seconds

