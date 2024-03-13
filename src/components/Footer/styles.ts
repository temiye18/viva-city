import styled from "styled-components";

const Section = styled.section`
  background: #2e0e0e;
  padding-top: clamp(2.1875rem, 0.8681rem + 4.2222vw, 4.5625rem);
  padding-bottom: clamp(2.375rem, 1.4792rem + 4.6667vw, 8.1875rem);

  .footer-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    color: #ffffff;

    .footer-list {
      text-transform: capitalize;

      .footer-list-heading {
        font-weight: bold;
        line-height: 30px;
        margin-bottom: 10px;
      }

      .footer-list-item {
        padding: 10px 0;

        a {
          cursor: pointer;
          color: #ffffff;
        }
      }
    }
  }
`;

export default Section;