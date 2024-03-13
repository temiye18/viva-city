import { Container } from "../../ui";
import Section from "./styles";

const Footer = () => {
  return (
    <Section>
      <Container>
        <div className="footer-wrapper">
          <div className="download-section">
            <p>Download our mobile app now on Playstore and Apple store</p>
          </div>
          <div className="footer-list">
            <div className="footer-list-heading">for business</div>
            <div className="footer-list-item">
              <a href="#business">business account</a>
            </div>
            <div className="footer-list-item">
              <a href="#sannerapp">scanner app</a>
            </div>
            <div className="footer-list-item">
              <a href="#escrowsystem">escrow system</a>
            </div>
          </div>
          <div className="footer-list">
            <div className="footer-list-heading">for personal</div>
            <div className="footer-list-item">
              <a href="#refund">refund</a>
            </div>
            <div className="footer-list-item">
              <a href="#ticketsharingp">ticket sharing</a>
            </div>
            <div className="footer-list-item">
              <a href="#payment">payment</a>
            </div>
          </div>
          <div className="footer-list">
            <div className="footer-list-heading">Company</div>
            <div className="footer-list-item">
              <a href="#aboutus">about ust</a>
            </div>
            <div className="footer-list-item">
              <a href="#howitworks">how it works</a>
            </div>
            <div className="footer-list-item">
              <a href="#joinourteam">join our team</a>
            </div>
          </div>
          <div className="footer-list">
            <div className="footer-list-heading">connect with us</div>
            <div className="footer-list-item">
              <a href="#live chat">live chat</a>
            </div>
            <div className="footer-list-item">
              <a href="#contactus">contact us</a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
