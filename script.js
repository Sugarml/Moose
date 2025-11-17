// ===================================
// Hero 輪播控制函數
// ===================================
let currentSlide = 0;
// 確保您 HTML 中的類名是 .slide
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length;
// 確保您 HTML 中的類名是 .dot
const dots = document.querySelectorAll('.dot'); 

// 檢查元素是否存在，避免運行時錯誤
if (slides.length > 0) {
    
    function showSlide(index) {
        // 處理邊界，如果 index 超出範圍則循環
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        // 隱藏所有 slide，移除 active 類別
        slides.forEach(slide => {
            slide.classList.remove('active-slide');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // 顯示當前 slide
        slides[currentSlide].classList.add('active-slide');
        dots[currentSlide].classList.add('active');
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPrevSlide() {
        showSlide(currentSlide - 1);
    }

    // 點擊事件監聽器 (箭頭和點點功能)
    const nextArrow = document.querySelector('.next-arrow');
    const prevArrow = document.querySelector('.prev-arrow');
    const sliderContainer = document.querySelector('.slides-container');

    if (nextArrow) nextArrow.addEventListener('click', showNextSlide);
    if (prevArrow) prevArrow.addEventListener('click', showPrevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // 初始化顯示第一個 slide
    showSlide(currentSlide);
    
    // ===================================
    // Hero 輪播手勢滑動 (Touch Swipe) 邏輯
    // ===================================

    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; // 定義最小滑動距離（像素）

    function handleGesture() {
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                // 從左向右滑動 (等同於看前一張)
                showPrevSlide();
            } else {
                // 從右向左滑動 (等同於看下一張)
                showNextSlide();
            }
        }
    }

    // 監聽觸摸開始事件
    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', e => {
            // 記錄觸摸開始時的 X 座標
            touchStartX = e.changedTouches[0].screenX;
            // 阻止瀏覽器預設的滾動行為，讓手勢優先
            e.preventDefault(); 
        }, { passive: false }); 

        // 監聽觸摸結束事件
        sliderContainer.addEventListener('touchend', e => {
            // 記錄觸摸結束時的 X 座標
            touchEndX = e.changedTouches[0].screenX;
            handleGesture(); // 處理滑動邏輯
        }, { passive: false });
    }
}

// ===================================
// 12. Navbar 漢堡選單邏輯 (手機版)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // 點擊連結後關閉選單
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }
    
    // ===================================
    // 13. LINE FAB 彈窗邏輯
    // ===================================
    const lineFab = document.querySelector('.line-fab');
    const modal = document.getElementById('lineModal');
    const closeModal = document.querySelector('.close-btn');

    if (lineFab && modal && closeModal) {
        lineFab.addEventListener('click', (e) => {
            e.preventDefault(); 
            modal.style.display = 'block';
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

// 如果您有任何內嵌在 HTML 裡的 <script> 輪播代碼，請移除它們。