import { type FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../../ui";
import Aside from "./styles";

type Props = {
  onCloseSidebar: () => void;
  isOpen: boolean;
};

const Sidebar: FC<Props> = ({ onCloseSidebar, isOpen }) => {
  return (
    <Aside className={isOpen ? "show-sidebar" : ""}>
      <div className="close-box">
        <div></div>
        <AiOutlineClose onClick={onCloseSidebar} className="close" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#_" onClick={onCloseSidebar}>
              About
            </a>
          </li>
          <li>
            <a href="#_" onClick={onCloseSidebar}>
              How it works
            </a>
          </li>
          <li>
            <a href="#_" onClick={onCloseSidebar}>
              Contact Us
            </a>
          </li>
        </ul>

        <div className="buttons">
          <Button className="buy-btn" variant="v-one" onClick={onCloseSidebar}>
            Buy Ticket
          </Button>
          <Button
            className="sell-btn"
            variant="v-three"
            onClick={onCloseSidebar}
          >
            Sell Ticket
          </Button>
        </div>
      </nav>
    </Aside>
  );
};

export default Sidebar;
