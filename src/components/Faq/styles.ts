import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
from {
    transform: translateY(-2rem);
  }
  to {
    transform: translateY(0);
  }

`;

const Section = styled.section`
  padding: clamp(6.25rem, 2.7431rem + 11.2222vw, 12.5625rem) 0;

  .faq {
    display: flex;
    gap: 2rem;

    @media (max-width: 821px) {
      flex-direction: column;
    }

    h2 {
      flex: 1;
      font-weight: 700;
      font-size: clamp(2.25rem, 1.5556rem + 2.2222vw, 3.5rem);
      line-height: 68px;
      letter-spacing: -0.56px;
    }
  }

  .question-box {
    flex: 1;
    display: grid;
    gap: 0.625rem;
  }
  .card {
    border: 1px solid var(--black);
    border-radius: 12px;
    padding: clamp(1.375rem, 1.0625rem + 1vw, 1.9375rem)
      clamp(1.5625rem, 1.0417rem + 1.6667vw, 2.5rem);

    .question {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: clamp(1rem, 0.8611rem + 0.4444vw, 1.25rem);
        line-height: 140%;
        font-weight: 600;
      }

      button {
        all: unset;
        cursor: pointer;
      }
    }

    .answer {
      animation: ${slideDown} 0.3s linear;

      p {
        font-size: clamp(1rem, 0.8611rem + 0.4444vw, 1.25rem);
        line-height: 140%;
        margin-top: 1.2rem;
      }
    }
  }
`;

export default Section;
