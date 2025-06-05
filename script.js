document.addEventListener("DOMContentLoaded", () => {
  // 파티클 효과 초기화
  initParticles();

  // 스크롤 이벤트 감지
  const sections = document.querySelectorAll("section");
  const options = {
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        // 통계 숫자 애니메이션
        if (entry.target.classList.contains("info-section")) {
          animateNumbers();
        }
      }
    });
  }, options);

  // 각 섹션에 애니메이션 초기 스타일 적용
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease-in-out";
    observer.observe(section);
  });

  // 파티클 효과 초기화 함수
  function initParticles() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "1";
    canvas.style.pointerEvents = "none";
    document.querySelector(".hero-section").appendChild(canvas);

    let particles = [];
    const particleCount = 50;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(0, 209, 178, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }

  // 통계 숫자 애니메이션 함수
  function animateNumbers() {
    const numbers = document.querySelectorAll(".stat-item .number");
    numbers.forEach((number) => {
      const target = parseFloat(number.textContent);
      let current = 0;
      const increment = target / 50;
      const duration = 1500;
      const stepTime = duration / 50;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        number.textContent = current.toFixed(1);
      }, stepTime);
    });
  }

  // 부드러운 스크롤 구현
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // 스크롤 진행 표시기 구현
  const scrollProgress = document.createElement("div");
  scrollProgress.className = "scroll-progress";
  document.body.appendChild(scrollProgress);

  window.addEventListener("scroll", () => {
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
  });

  // 버튼 클릭 효과
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;

      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // 특성 카드 마우스 추적 효과
  const cards = document.querySelectorAll(".feature-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
  });

  // 스크롤 애니메이션
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("fade-out");
    observer.observe(section);
  });

  // FAQ 아코디언
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isOpen = question.classList.contains("active");

      // 다른 모든 FAQ 닫기
      faqQuestions.forEach((q) => {
        q.classList.remove("active");
        if (q.nextElementSibling) {
          q.nextElementSibling.style.maxHeight = null;
        }
      });

      // 클릭된 FAQ 토글
      if (!isOpen) {
        question.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // 숫자 카운팅 애니메이션
  const animateNumber = (element, start, end, duration) => {
    let current = start;
    const range = end - start;
    const increment = range / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      element.textContent = Math.round(current);
      if (current >= end) {
        element.textContent = end;
        clearInterval(timer);
      }
    }, 16);
  };

  // 통계 숫자 애니메이션 적용
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const numberElements = entry.target.querySelectorAll(".number");
        numberElements.forEach((el) => {
          const endValue = parseInt(el.getAttribute("data-value"));
          animateNumber(el, 0, endValue, 2000);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".stats-section").forEach((section) => {
    statsObserver.observe(section);
  });

  // Intersection Observer 설정
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        if (entry.target.classList.contains("stats-number")) {
          animateNumber(entry.target);
        }
      }
    });
  }, observerOptions);

  // 애니메이션이 필요한 요소들 관찰
  document
    .querySelectorAll(".vision-content, .service-card, .stats-item, .step")
    .forEach((el) => {
      el.classList.add("fade-up");
      observer.observe(el);
    });

  // 통계 숫자 애니메이션
  function animateNumber(element) {
    const target = parseInt(element.getAttribute("data-target"));
    const duration = 2000;
    const step = (target / duration) * 10;
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 10);
  }

  // 스크롤 진행 표시기
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });

  // 버튼 리플 이펙트
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function (e) {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;

      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 1000);
    });
  });

  // 서비스 카드 3D 효과
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
  });

  // 버튼 호버 효과
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "translateY(-2px)";
      button.style.boxShadow = "0 0 20px rgba(0, 209, 178, 0.5)";
    });

    button.addEventListener("mouseout", () => {
      button.style.transform = "translateY(0)";
      button.style.boxShadow = "";
    });
  });

  // 검색바 포커스 효과
  const searchInput = document.querySelector(".search-bar input");
  if (searchInput) {
    searchInput.addEventListener("focus", () => {
      searchInput.parentElement.style.boxShadow =
        "0 0 10px rgba(0, 209, 178, 0.5)";
    });

    searchInput.addEventListener("blur", () => {
      searchInput.parentElement.style.boxShadow = "";
    });
  }

  // 텍스트 타이핑 효과
  const titles = document.querySelectorAll("h1, h2, h3");
  titles.forEach((title) => {
    const text = title.textContent;
    title.textContent = "";
    let index = 0;

    function typeText() {
      if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeText();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(title);
  });

  // 통계 원형 애니메이션
  const statsCircle = document.querySelector(".stats-circle");
  if (statsCircle) {
    statsCircle.style.transform = "scale(0)";
    statsCircle.style.transition = "transform 0.6s ease-out";

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statsCircle.style.transform = "scale(1)";
        }
      });
    });

    statsObserver.observe(statsCircle);
  }

  // FAQ 토글 기능
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const arrow = question.querySelector(".arrow-down");
      const isExpanded = item.classList.contains("expanded");

      // 모든 FAQ 아이템을 닫기
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("expanded");
          const otherArrow = otherItem.querySelector(".arrow-down");
          otherArrow.style.transform = "rotate(45deg)";
        }
      });

      // 클릭된 아이템 토글
      item.classList.toggle("expanded");
      arrow.style.transform = isExpanded ? "rotate(45deg)" : "rotate(-135deg)";
    });
  });

  // 가격 카드 슬라이더 기능
  const sliderContainer = document.querySelector(".price-cards-container");
  const cards = document.querySelectorAll(".price-card");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");
  const dots = document.querySelectorAll(".dot");

  let currentIndex = 0;
  const totalCards = cards.length;

  // 초기 상태 설정
  updateSlider();

  // 이전 버튼 클릭
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateSlider();
  });

  // 다음 버튼 클릭
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateSlider();
  });

  // 도트 클릭
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
  });

  function updateSlider() {
    // 카드 위치 업데이트
    const offset = -currentIndex * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;

    // 활성 카드 스타일 업데이트
    cards.forEach((card, index) => {
      if (index === currentIndex) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });

    // 도트 업데이트
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
});

// CSS 애니메이션 클래스 추가
const style = document.createElement("style");
style.textContent = `
    .fade-up {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .fade-up.animate {
        opacity: 1;
        transform: translateY(0);
    }

    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: var(--primary-color);
        z-index: 1000;
        transition: width 0.1s;
    }

    .ripple {
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 1s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .service-card {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);
