import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="feature-box">
        <h2>
          도움될{" "}
          <span className="highlight">
            파파야할
            <br />
            가격, 속도
          </span>
        </h2>
        <p className="subtitle">성과까지는 모든 분야 출원경험보유</p>
        <h3>
          <span className="highlight">베이스</span>가<br />
          바꿨습니다.
        </h3>
        <ul className="feature-list">
          <li>압도적인 출원 속도</li>
          <li>업계 최저 가격</li>
          <li>등록 실패 시 재출원 보장</li>
          <li>100+ 출원 경험</li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
