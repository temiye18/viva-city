import styled from "styled-components";

const Section = styled.section`
  background: #2e0e0e;
  padding-top: clamp(2.1875rem, 0.8681rem + 4.2222vw, 4.5625rem);
  padding-bottom: clamp(2.375rem, 1.4792rem + 4.6667vw, 8.1875rem); 
  color: #ffffff; 
  font-size: 14px;

  .footer-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 20px;

    @media (max-width: 568px) {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 20px;
    }

    .download-section {
      .download-store {
        margin-bottom: 40px;

        a {
          margin-right: 10px;
        }
      }
    }

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

        .footer-social-icons {
          a {
            padding: 0 0.48rem 0 0;
          }
        }
      }
    }
  }

  .foot-note {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    text-transform: capitalize;

    p.policy {

      a {
        color: #FFFFFF;
        margin-right: 10px;
      }
    }
  }
`;

export default Section;
