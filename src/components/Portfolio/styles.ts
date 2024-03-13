import styled from "styled-components";

const Section = styled.section`
  padding: 2.8125rem 0;

  .info-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 785px) {
      flex-direction: column;
      row-gap: 2rem;
    }

    & > div {
      display: flex;
      gap: 3.2rem;

      h6 {
        font-weight: 700;
        font-size: clamp(1.4375rem, 1.125rem + 1vw, 2rem);
        line-height: 125%;
        color: var(--black-one);
        flex-shrink: 1;
        flex-basis: min(263px, 100%);
      }

      p {
        font-weight: 500;
        font-size: clamp(0.75rem, 0.6632rem + 0.2778vw, 0.90625rem);
        line-height: 163%;
        color: var(--black-one);
        flex-shrink: 1;
        flex-basis: min(251px, 100%);

        span {
          color: var(--secondary-color);
        }
      }
    }

    p.metric {
      font-weight: 700;
      font-size: clamp(3.125rem, 0.8898rem + 7.1528vw, 7.1484375rem);
      letter-spacing: -5.76px;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: var(--secondary-color);
      color: var(--white);
    }
  }

  .companies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    margin-top: 1rem;

    @media (max-width: 461px) {
      place-items: center;
    }

    @media (min-width: 820px) {
      width: 80%;
    }
  }
`;

export default Section;
