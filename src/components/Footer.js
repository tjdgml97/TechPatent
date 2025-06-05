import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2>BASS</h2>
          <p>베이스 특허법률사무소</p>
          <p>대표 : 김상수 | 사업자번호 536-02-03169</p>
          <p>주소 : 서울특별시 송파구 올림픽로 111, 901-6호</p>
          <p>(방이동, 세가빌딩)</p>
          <p>이메일 : bass@basspat.co</p>
          <p>전화번호 : 010-4296-2559</p>
        </div>
        <p className="copyright">
          © 2024 BASS 특허법률사무소. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
