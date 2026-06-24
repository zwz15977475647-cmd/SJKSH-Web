/**
 * 瓷韵千年 - 公共脚本
 * 功能：导航栏滚动效果、移动端菜单、平滑滚动
 */

(function() {
    'use strict';

    // ==================== 导航栏滚动效果 ====================
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('py-2', 'shadow-md');
                navbar.classList.remove('py-4', 'shadow-sm');
            } else {
                navbar.classList.add('py-4', 'shadow-sm');
                navbar.classList.remove('py-2', 'shadow-md');
            }
        });
    }

    // ==================== 移动端菜单 ====================
    const menuToggle = document.getElementById('menuToggle');
    const closeMenuBtn = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function openMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMenu() {
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    if (menuToggle) menuToggle.addEventListener('click', openMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
    
    // 点击遮罩层关闭
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) closeMenu();
        });
    }

    // 点击导航链接后关闭菜单
    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    // ==================== 数字计数器动画 ====================
    window.animateCounter = function(elementId, target, duration) {
        duration = duration || 2000;
        const element = document.getElementById(elementId);
        if (!element) return;
        
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.floor(current);
        }, 16);
    };

    // ==================== 滚动到指定元素 ====================
    window.scrollToSection = function(elementId, offset) {
        offset = offset || 100;
        const element = document.getElementById(elementId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    };

    // ==================== IntersectionObserver 工具 ====================
    window.createScrollObserver = function(callback, options) {
        options = options || { threshold: 0.2, rootMargin: '0px 0px -100px 0px' };
        return new IntersectionObserver(callback, options);
    };

})();