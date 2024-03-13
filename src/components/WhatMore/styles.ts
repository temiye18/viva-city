import styled from "styled-components";

const Section = styled.section`
  padding-top: clamp(5.9375rem, 4.5833rem + 4.3333vw, 8.375rem);

  .question-box {
    display: flex;
    gap: 10.3125rem;

    @media (max-width: 766px) {
      gap: 5rem;
    }

    @media (max-width: 656px) {
      flex-direction: column;
      gap: 2rem;
    }

    h2 {
      font-weight: 700;
      font-size: clamp(1.48125rem, 0.9153rem + 1.8111vw, 2.5rem);
      line-height: 112%;
    }
    p {
      font-weight: 500;
      font-size: clamp(1.1875rem, 1.0725rem + 0.3681vw, 1.39453125rem);
      line-height: 141%;
      width: 100%;
      max-width: 318px;
    }
  }

  .perks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: clamp(2.8125rem, 2.2222rem + 1.8889vw, 3.875rem);

    & > div {
      padding: clamp(1.5rem, 0.9097rem + 1.8889vw, 2.5625rem);
      border: 1px solid rgba(204, 204, 204, 0.5);
      border-radius: 16px;

      h6 {
        font-weight: 900;
        font-size: clamp(1.25rem, 1.1111rem + 0.4444vw, 1.5rem);
        line-height: 138%;
        margin-top: clamp(1.5625rem, 1.0417rem + 1.6667vw, 2.5rem);
      }

      p {
        font-weight: 500;
        font-size: clamp(0.90625rem, 0.7641rem + 0.4549vw, 1.1621125rem);
        line-height: 141%;
        margin-top: clamp(0.84375rem, 0.7569rem + 0.2778vw, 1rem);
      }
    }
  }
`;

export default Section;
