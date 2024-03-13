import styled from "styled-components";
import { FooterIBg } from "../../assets/images";

const Section = styled.section`
  background-color: var(--tertiary-color);
  background-image: url(${FooterIBg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: clamp(2.1875rem, 0.8681rem + 4.2222vw, 4.5625rem);
  padding-bottom: clamp(2.375rem, 1.4792rem + 4.6667vw, 8.1875rem);

  h2.header {
    font-weight: 900;
    font-size: clamp(1.46875rem, 0.8958rem + 1.8333vw, 2.5rem);
    line-height: 112%;
    text-align: center;
    width: 100%;
    max-width: 841px;
    margin: 0 auto;
    color: #ffffff;
  }

  p.foot-note {
    font-weight: 400;
    font-size: 12px;
    line-height: 60%;
    text-align: center;
    width: 100%;
    max-width: 157px;
    margin: 20px auto;
    color: #ffffff;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;

    .create-account-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff0c2;
      color: #020203;
      padding-left: 1.375rem;
      padding-right: 1.375rem;
    }
  }
`;

export default Section;
