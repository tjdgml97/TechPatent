import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="promotion-banner">
        첫 출원 고객 10% 할인 이벤트 진행중!
      </div>
      <div className="hero-content">
        <div className="logo-container">
          <h1 className="logo">BASS</h1>
          <p className="logo-subtitle">베이스 특허법률사무소</p>
          <button className="contact-button">문의하기</button>
        </div>
        <div className="hero-message">
          <p className="message-text">
            업계의 불합리한 <span className="highlight">가격</span>과 느린 속도,
            <br />
            <strong>견적가 바꾸겠습니다!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
