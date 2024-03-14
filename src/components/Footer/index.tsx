import {
  AppStore,
  FacebookIcon,
  GooglePlayStore,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../assets/images";
import { Container } from "../../ui";
import Section from "./styles";

const Footer = () => {
  return (
    <Section>
      <Container>
        <div className="footer-wrapper">
          <div className="download-section">
            <div className="download-store">
              <a href="#googleplaystore">
                <img src={GooglePlayStore} alt="Google Play Store" />
              </a>
              <a href="#appstore">
                <img src={AppStore} alt="App Store" />
              </a>
            </div>
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
              <a href="#aboutus">about us</a>
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
            <div className="footer-list-item">
              <div className="footer-social-icons">
                <a href="#linkedin">
                  <img src={LinkedinIcon} alt="Linkedin icon" />
                </a>
                <a href="#twitter">
                  <img src={TwitterIcon} alt="Twitter icon" />
                </a>
                <a href="#facebook">
                  <img src={FacebookIcon} alt="Facebook icon" />
                </a>
                <a href="#instagram">
                  <img src={InstagramIcon} alt="Instagram icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="foot-note">
          <p>Copyright © 2024, Vivacity Technology Limited</p>
          <p className="policy">
            <a href="#privacypolicy">privacy policy</a>
            <a href="#cookiepolicy">Cookie policy</a>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
