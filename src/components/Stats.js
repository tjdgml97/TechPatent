import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-circle">
        <p>
          10명 중 9명이
          <br />
          재의뢰하는 사무소,
        </p>
        <p className="highlight">이유가 있습니다.</p>
      </div>
      <p className="stats-caption">당일상담신청즉시처리</p>
    </section>
  );
};

export default Stats;
