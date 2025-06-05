import React from "react";
import "./Quote.css";

const Quote = () => {
  return (
    <section className="quote-section">
      <div className="quote-content">
        <h2>
          특허,
          <br />뭘 어떻게 해야 하는지
          <br />
          모르겠어요.
        </h2>
        <div className="quote">
          <p className="quote-text">
            "아이디어만
            <br />
            있으면 됩니다."
          </p>
          <p className="quote-caption">나머지는 저희가 알아서 다 해드립니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
