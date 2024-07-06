document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
  
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggleBtn.textContent = 'Switch to Light Mode';
    }
  
    themeToggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      themeToggleBtn.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });
  });
  

  const nav = document.querySelector(".mobile_nav_list");
const burger = document.querySelector(".nav_burger");

burger.addEventListener("click", () => {
  nav.classList.toggle("show_mobile_nav");
});
    var swiper = new Swiper('.clients-slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });


    
    document.addEventListener("DOMContentLoaded", function() {
    function animateCount(element, endValue, duration) {
        let startValue = 0;
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            element.textContent = Math.floor(progress * endValue);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = endValue;  // Ensure it ends at the exact value
            }
        }

        window.requestAnimationFrame(step);
    }

    function initCountUp() {
        const countUpElements = document.querySelectorAll('.help_item_title');
        
        countUpElements.forEach(element => {
            const endValue = parseInt(element.getAttribute('data-count'), 10);
            setTimeout(() => animateCount(element, endValue, 1000), 1000);
        });
    }

    setTimeout(initCountUp, 500);
});