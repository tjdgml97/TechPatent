import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "특허 출원비용은 얼마 인가요?",
      answer:
        "특허 출원 비용은 기술의 복잡도와 청구항 수에 따라 다르지만, 일반적으로 60만원부터 시작합니다. 3건 이상 출원 시 할인 혜택을 제공해 드립니다.",
    },
    {
      question: "특허 출원까지 얼마나 걸리나요?",
      answer:
        "일반적으로 특허 명세서 작성부터 출원까지 2-3주 정도 소요됩니다. 긴급한 경우 1주일 이내 신속 출원도 가능합니다.",
    },
    {
      question: "아이디어만 있는데 특허 출원 가능한가요?",
      answer:
        "네, 가능합니다. 아이디어를 구체화하고 특허로 보호받을 수 있도록 전문 변리사가 도와드립니다. 상담을 통해 아이디어의 특허 가능성을 검토해 드립니다.",
    },
    {
      question: "해외 특허 출원도 가능한가요?",
      answer:
        "네, PCT 국제출원 및 개별국 해외출원 모두 가능합니다. 국가별 특허 제도와 비용을 고려하여 최적의 해외출원 전략을 제시해 드립니다.",
    },
    {
      question: "상담은 어떻게 진행 되나요?",
      answer:
        "카카오톡이나 전화로 편하신 방법을 선택하실 수 있습니다. 초기 상담은 무료로 진행되며, 특허 가능성과 비용에 대해 상세히 상담해 드립니다.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>자주 묻는 질문</h2>
      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "expanded" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>Q. {item.question}</span>
              <i className="arrow-down"></i>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="consultation-buttons">
        <button className="btn-kakao">카톡 문의</button>
        <button className="btn-phone">상담 문의</button>
      </div>
    </section>
  );
};

export default FAQ;
