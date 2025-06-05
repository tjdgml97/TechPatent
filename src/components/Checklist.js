import React from "react";
import "./Checklist.css";

const Checklist = () => {
  return (
    <section className="checklist-section">
      <div className="question-box">
        <div className="question-mark">?</div>
        <h2>이런 고민 해보셨나요?</h2>
        <h3>CHECK LIST</h3>
      </div>
      <ul className="check-list">
        <li>아이디어부터 시작해야 할지 모르는 경우</li>
        <li>비용이 부담되는 경우</li>
        <li>빨리 출원해야 하는 경우</li>
        <li>출원 실패에 대한 걱정</li>
      </ul>
    </section>
  );
};

export default Checklist;
