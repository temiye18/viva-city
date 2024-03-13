import { type FC } from "react";
import { Button, Container } from "../../ui";
import { RiMenu3Fill } from "react-icons/ri";
import StyledHeader from "./styles";

type Props = {
  onOpenSidebar: () => void;
};

const Header: FC<Props> = ({ onOpenSidebar }) => {
  return (
    <StyledHeader>
      <Container>
        <div className="header-content">
          <h1>Vivacity</h1>

          <div className="right-nav">
            <RiMenu3Fill size={24} onClick={onOpenSidebar} />
            <ul>
              <li>
                <a href="#_">About</a>
              </li>
              <li>
                <a href="#_">How it works</a>
              </li>
              <li>
                <a href="#_">Contact Us</a>
              </li>
            </ul>

            <div className="buttons">
              <Button className="buy-btn" variant="v-one">
                Buy Ticket
              </Button>
              <Button className="sell-btn" variant="v-two">
                Sell Ticket
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
