import styled from "styled-components";

const Section = styled.section`
  /* padding-top: clamp(5.25rem, 1.1875rem + 13vw, 6rem); */
  padding-top: clamp(5.25rem, 4.8333rem + 1.3333vw, 6rem);

  .get-started {
    display: flex;
    align-items: center;
    gap: 4.6875rem;

    @media (max-width: 820px) {
      flex-direction: column;
    }

    .image {
      flex: 1;

      img {
        width: 100%;
      }
    }

    .step-box {
      flex: 1;
      align-self: flex-end;

      .header {
        h2 {
          font-weight: 700;
          font-size: clamp(1.5625rem, 0.864rem + 2.2352vw, 2.819825rem);
          line-height: 127%;
        }

        p {
          font-weight: 500;
          font-size: clamp(0.86875rem, 0.7752rem + 0.2993vw, 1.0371125rem);
          line-height: 169%;
          margin-top: 1.125rem;
        }
      }

      .steps {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1.1rem;
        margin-top: clamp(1.5625rem, 0.9375rem + 2vw, 2.6875rem);

        & > div {
          display: grid;
          gap: 4.6875rem;
        }

        & > .vector {
          align-self: stretch;

          svg {
            width: 100%;
            height: 100%;
          }
        }

        .step-item {
          h4 {
            font-weight: 900;
            font-size: clamp(1.2625rem, 1.1306rem + 0.4222vw, 1.5rem);
            line-height: 138%;
          }

          p {
            font-weight: 500;
            font-size: clamp(0.86875rem, 0.7752rem + 0.2993vw, 1.0371125rem);
            line-height: 169%;
            margin-top: 0.875rem;
          }
        }
      }
    }
  }
`;

export default Section;
