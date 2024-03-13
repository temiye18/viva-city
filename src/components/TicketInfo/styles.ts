import styled from "styled-components";

const Section = styled.section`
  background-color: #fef8f8;
  padding-top: clamp(2.1875rem, 0.8681rem + 4.2222vw, 4.5625rem);
  padding-bottom: clamp(9.375rem, 4.4792rem + 15.6667vw, 18.1875rem);
  position: relative;

  .offer-bg {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    @media (max-width: 821px) {
      display: none;
    }
  }

  h2.header {
    font-weight: 700;
    font-size: clamp(1.46875rem, 0.8958rem + 1.8333vw, 2.5rem);
    line-height: 112%;
    text-align: center;
    width: 100%;
    max-width: 644px;
    margin: 0 auto;
  }

  .tab {
    margin-top: clamp(2.625rem, 1.8958rem + 2.3333vw, 3.9375rem);
    background-color: var(--white);
    box-shadow: 3px 24px 53px rgba(208, 221, 240, 0.1),
      12px 96px 97px rgba(208, 221, 240, 0.09),
      26px 217px 131px rgba(208, 221, 240, 0.05),
      46px 385px 155px rgba(208, 221, 240, 0.01);
    border-radius: 24px;
    padding: clamp(1.25rem, 0.8333rem + 1.3333vw, 2rem);
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 820px) {
      width: 70%;
    }

    @media (max-width: 911px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }

    p {
      font-size: clamp(0.6rem, 0.3083rem + 0.9333vw, 1.125rem);
      width: max-content;

      &:first-child {
        background: rgba(246, 193, 193, 0.37);
        border: 1px solid var(--primary-light);
        border-radius: 20px;
        color: var(--secondary-color);
        /* padding: (0.3125rem, 0.1389rem + 0.5556vw, 0.625rem)
          clamp(0.625rem, 0.3125rem + 1vw, 1.1875rem); */
        padding: 0.625rem 1.1875rem;
      }
    }
  }

  .offers-box {
    margin-top: clamp(3.5rem, 2.0764rem + 4.5556vw, 6.0625rem);
    display: grid;
    gap: 7.75rem;

    @media (max-width: 768px) {
      gap: 5rem;
    }

    .offer-item {
      display: flex;
      align-items: center;
      gap: 2.5rem;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
      }

      &:nth-child(even) {
        flex-direction: row-reverse;

        @media (max-width: 768px) {
          flex-direction: column;
        }
      }

      &:nth-child(odd) {
        h5 {
          @media (min-width: 768px) {
            width: 100%;
            max-width: 469px;
          }
        }

        p:nth-child(3) {
          @media (min-width: 768px) {
            width: 100%;
            max-width: 469px;
          }
        }
      }

      & > div:first-child {
        flex: 1;

        p:first-child {
          border: 1px solid #f9fafb;
          background: rgba(246, 193, 193, 0.37);
          color: var(--secondary-color);
          border-radius: 20px;
          padding: 0.6875rem clamp(0.95625rem, 0.7236rem + 0.7444vw, 1.375rem);
          font-size: clamp(
            0.8375rem,
            0.7315rem + 0.3392vw,
            1.02831875rem
          ) !important;
          font-weight: 500;
          font-size: 16.4531px;
          line-height: 109%;
          letter-spacing: -0.45px;
          width: max-content;
        }

        h5 {
          font-weight: 700;
          font-size: clamp(1.40625rem, 0.7986rem + 1.9444vw, 2.5rem);
          line-height: 112%;
          color: var(--black-one);
          margin: clamp(1rem, 0.8611rem + 0.4444vw, 1.25rem) 0;
        }

        p:nth-child(3) {
          font-weight: 500;
          font-size: clamp(0.875rem, 0.7849rem + 0.2882vw, 1.0371125rem);
          line-height: 169%;
          margin-bottom: clamp(1rem, 0.8611rem + 0.4444vw, 1.25rem);
        }

        .link {
          padding-left: clamp(1.5625rem, 0.625rem + 3vw, 3.25rem);
          padding-right: clamp(1.5625rem, 0.625rem + 3vw, 3.25rem);
        }
      }

      .imageBox {
        flex: 1;

        img {
          width: 100%;
        }
      }
    }
  }
`;

export default Section;
