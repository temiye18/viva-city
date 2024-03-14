import styled from "styled-components";
import { HeroBg } from "../../assets/images";

const StyledHeader = styled.header`
  background-color: var(--secondary-color);
  background-image: url(${HeroBg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 1.75rem 0;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;

  .header-content {
    display: flex;
    align-items: center;

    h1 {
      font-size: 1.6436rem;
      font-weight: 900;
      color: var(--white);
    }

    .right-nav {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 3.25rem;

      svg {
        display: none;
        color: var(--white);
        cursor: pointer;

        @media (max-width: 821px) {
          display: block;
        }
      }

      ul {
        display: flex;
        align-items: center;
        gap: 1.875rem;

        @media (max-width: 821px) {
          display: none;
        }

        a {
          color: var(--white);
          font-size: 0.875rem;
          line-height: 171%;
        }
      }

      .buttons {
        display: flex;
        align-items: center;
        gap: 1.125rem;

        @media (max-width: 821px) {
          display: none;
        }

        .buy-btn,
        .sell-btn {
          padding-left: 1.375rem;
          padding-right: 1.375rem;
        }
      }
    }
  }
`;

export default StyledHeader;
