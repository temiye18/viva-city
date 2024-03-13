import styled from "styled-components";

const Aside = styled.aside`
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 10;
  top: 0;
  right: 0;
  background-color: var(--white);
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.6s linear;
  transform: translateX(120%);
  padding: 2rem 2rem;

  @media (min-width: 822px) {
    display: none;
  }

  &.show-sidebar {
    transform: translateX(0);
  }
  .close-box {
    display: flex;

    .close {
      margin-left: auto;
      color: var(--black);
      font-size: 1.7rem;
      cursor: pointer;
    }
  }

  nav ul {
    display: grid;
    row-gap: 2.5rem;
    margin-top: 2rem;
    place-items: center;

    a {
      color: var(--secondary-color);
      font-weight: 500;
    }
  }

  .buttons {
    margin-top: 2.5rem;
    display: grid;
    place-items: center;
    row-gap: 2.5rem;

    .buy-btn,
    .sell-btn {
      padding-left: 1.375rem;
      padding-right: 1.375rem;
    }

    .buy-btn {
      border: 1px solid var(--secondary-color);
      color: var(--secondary-color);
    }
  }
`;

export default Aside;
