import { useState } from "react";
import Section from "./styles";
import { Container } from "../../ui";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import { faqs } from "../../constants";

const Faq = () => {
  const [clickId, setClickId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setClickId((prev) => (prev === id ? null : id));
  };
  return (
    <Section>
      <Container className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="question-box">
          {faqs.map((faq) => {
            const isActive = clickId === faq.id;
            return (
              <div className="card" key={faq.id}>
                <div className="question" onClick={() => handleClick(faq.id)}>
                  <p>{faq.question}</p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick(faq.id);
                    }}
                  >
                    {isActive ? <PiCaretUp /> : <PiCaretDown />}
                  </button>
                </div>

                {isActive && (
                  <div className="answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Faq;
