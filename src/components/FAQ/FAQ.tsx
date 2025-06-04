import React, { useState } from "react";
import styled from "styled-components";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const FAQTitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 24px;
  margin-bottom: 30px;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FAQItemContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const QuestionButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 16px 20px;
  background: transparent;
  border: none;
  text-align: left;
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(${(props) => (props.isOpen ? "225deg" : "45deg")});
    transition: transform 0.3s;
  }
`;

const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.isOpen ? "16px 20px" : "0 20px")};
  color: #fff;
  font-size: 14px;
  line-height: 1.6;
  transition: all 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.05);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 40px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.3s;

  background-color: ${(props) => (props.primary ? "#FFD700" : "#666")};
  color: ${(props) => (props.primary ? "#000" : "#fff")};

  &:hover {
    opacity: 0.8;
  }
`;

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "특허 출원에는 얼마나 걸리나요?",
      answer:
        "초기 비용은 다짜, 류슬형, 구독형에따라 다릅니다. 단건 기준 80만원입니다 (특허 조정 가능). 특허청에 경과 3-5이상 출원시 건당 60만원, 구독형의 경우 건당 40만원입니다.",
    },
    {
      question: "특허 출원까지 주어나 걸리나요?",
      answer: "일반적으로 특허 출원부터 등록까지 약 12-18개월이 소요됩니다.",
    },
    {
      question: "아이디어만 있는데 특허 출원이 가능한가요?",
      answer:
        "네, 아이디어만으로도 특허 출원이 가능합니다. 저희 전문가가 아이디어를 구체화하고 특허 명세서로 작성해드립니다.",
    },
    {
      question: "해외 특허 출원도 가능한가요?",
      answer: "네, PCT 국제출원 및 개별국 해외출원 모두 가능합니다.",
    },
    {
      question: "상담은 어떻게 진행 되나요?",
      answer:
        "온라인 상담과 대면 상담 모두 가능합니다. 편하신 방식을 선택하시면 됩니다.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <FAQTitle>자주 묻는 질문</FAQTitle>
      <FAQList>
        {faqItems.map((item, index) => (
          <FAQItemContainer key={index}>
            <QuestionButton
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            >
              {item.question}
            </QuestionButton>
            <Answer isOpen={openIndex === index}>{item.answer}</Answer>
          </FAQItemContainer>
        ))}
      </FAQList>
      <ButtonContainer>
        <Button primary>기본 문의</Button>
        <Button>상담 문의</Button>
      </ButtonContainer>
    </FAQSection>
  );
};

export default FAQ;
