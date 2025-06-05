import React, { useState } from "react";
import "./PriceCarousel.css";

const PriceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const priceCards = [
    {
      title: "기본형",
      price: "80만원",
      subtext: "60만원 및 출원 정보 프로모션!",
      features: [
        "등록율 90%+",
        "특허 기술 보호",
        "기업 최소화 전략",
        "기업 시 제품화 지원",
      ],
      additionalFeatures: [
        "특허 포트폴리오 구축 필요할 때",
        "등록중이 꼭 필요한 경우",
        "투자 유치 계획",
        "정부 지원 사업 신청 예정",
      ],
    },
    {
      title: "유료형",
      price: "60만원",
      subtext: "3건 이상 출원하는 경우",
      features: [
        "다건 출원 시 할인 제공",
        "등록율 90%+",
        "강력한 기술 보호",
        "기업 최소화 전략",
        "기업 시 제품화 지원",
      ],
      additionalFeatures: [
        "특허 포트폴리오 구축",
        "다수 기술 보호",
        "투자 유치 계획",
        "정부 지원 사업 신청 예정",
      ],
    },
  ];

  const nextCard = () => {
    setActiveIndex((current) => (current === 0 ? 1 : 0));
  };

  const prevCard = () => {
    setActiveIndex((current) => (current === 0 ? 1 : 0));
  };

  const card = priceCards[activeIndex];

  return (
    <div className="price-carousel-container">
      <h2>업계 최저가</h2>
      <h3>합리적인 특허 비용</h3>
      <div className="carousel-wrapper">
        <button className="nav-button prev" onClick={prevCard}>
          &#10094;
        </button>
        <div className="price-card">
          <div className="price-card-inner">
            <div>
              <h3>{card.title}</h3>
              <div className="price">
                {card.price}
                <span className="period">/건</span>
              </div>
              <div className="subtext">{card.subtext}</div>
              <ul className="features-list">
                {card.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="additional-features">
                <ul className="additional-features-list">
                  {card.additionalFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="price-button">견적 알아보기</button>
          </div>
        </div>
        <button className="nav-button next" onClick={nextCard}>
          &#10095;
        </button>
      </div>
      <div className="carousel-dots">
        <span
          className={`dot ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => setActiveIndex(0)}
        ></span>
        <span
          className={`dot ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => setActiveIndex(1)}
        ></span>
      </div>
    </div>
  );
};

export default PriceCarousel;
