import styled from "styled-components";
import { HeroBg } from "../../assets/images";

const Section = styled.section`
  background-color: var(--secondary-color);
  background-image: url(${HeroBg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  .hero-container {
    min-height: 500px;
    display: grid;
    align-items: center;

    @media (max-width: 821px) {
      min-height: 250px;
    }

    & > div:first-child {
      display: flex;
    }

    .text-box {
      flex: 1;
      h1 {
        font-weight: 900;
        font-size: clamp(1.69rem, -0.3572rem + 6.5511vw, 5.375rem);
        line-height: 123%;
        color: var(--white);
      }

      h5 {
        font-weight: 900;
        font-size: clamp(1.1rem, 0.3222rem + 2.4889vw, 2.5rem);
        line-height: 125%;
        color: var(--white);
        margin-top: clamp(1.2rem, 0.5819rem + 1.9778vw, 2.3125rem);
      }
    }

    .image-box {
      align-self: end;
      flex: 1;
      position: relative;

      svg {
        width: 100%;
      }

      @media (max-width: 821px) {
        display: none;
      }
    }
  }
`;

export default Section;
