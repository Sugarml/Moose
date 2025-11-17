// =======================================
// 1. LINE MODAL 邏輯
// =======================================
function setupLineModal() {
    var modal = document.getElementById("lineModal");
    var btn = document.getElementById("openLineModal");
    var span = document.getElementsByClassName("close-btn")[0];

    // 避免找不到元素時報錯
    if (!modal || !btn || !span) return; 

    btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// =======================================
// 2. CAROUSEL 輪播邏輯
// =======================================
var slideIndex = 1;
var slides;
var dots;
var heroSection;

function showSlides(n) {
    if (!slides || slides.length === 0) return;
    
    var i;
    
    // 循環邏輯：如果超過最後一個，回到第一個
    if (n > slides.length) {slideIndex = 1}
    // 如果小於第一個，跳到最後一個
    if (n < 1) {slideIndex = slides.length}
    
    // 隱藏所有 slides 和移除所有 active 圓點
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active-slide');
        dots[i].classList.remove('active');
    }
    
    // 顯示當前 slide 和設定 active 圓點
    slides[slideIndex-1].classList.add('active-slide');
    dots[slideIndex-1].classList.add('active');

    // 根據當前 slide 的 data-bg-color 改變 hero-section 的背景顏色
    var bgColor = slides[slideIndex-1].getAttribute('data-bg-color');
    if (bgColor) {
        heroSection.style.backgroundColor = bgColor;
    }
}

// 全局函數，供 HTML 中的 onclick 調用
window.changeSlide = function(n) {
    showSlides(slideIndex += n);
}

// 全局函數，供 HTML 中的 onclick 調用
window.currentSlide = function(n) {
    showSlides(slideIndex = n);
}

function initCarousel() {
    slides = document.getElementsByClassName("slide");
    dots = document.getElementsByClassName("dot");
    heroSection = document.querySelector(".hero-section");
    
    if (slides.length > 0) {
        showSlides(slideIndex); // 顯示初始 Slide
    }
}


// =======================================
// 3. HAMBURGER MENU 邏輯 (新增)
// =======================================
function setupHamburgerMenu() {
    var hamburgerBtn = document.getElementById("hamburger-btn");
    var navMenu = document.getElementById("nav-links-menu");

    if (!hamburgerBtn || !navMenu) return;

    hamburgerBtn.addEventListener('click', function() {
        // 切換 'open' 類別來控制選單的滑入/滑出
        navMenu.classList.toggle('open');
        
        // 切換圖標
        var icon = hamburgerBtn.querySelector('i');
        if (navMenu.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // 漢堡變叉叉
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 點擊選單連結後自動關閉選單
    var navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                hamburgerBtn.querySelector('i').classList.remove('fa-times');
                hamburgerBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });
}


// =======================================
// 4. 頁面載入完成後執行所有初始化函數
// =======================================
document.addEventListener('DOMContentLoaded', function() {
    setupLineModal();
    initCarousel();
    setupHamburgerMenu();
});