import { Container } from "../../ui";
import { Bbc, Spotify, Trivago, Tiktok, Rakuten } from "../../assets/images";
import Section from "./styles";

const Portfolio = () => {
  return (
    <Section>
      <Container>
        <div className="info-box">
          <div>
            <h6>Businesses that Count On Us</h6>
            <p>
              Join over <span>2 million</span> successful business owners who
              trust vivacity for all their event ticket business needs.
            </p>
          </div>

          <p className="metric">2m+</p>
        </div>

        <Container className="companies">
          <img src={Spotify} alt="spotify_logo" />
          <img src={Tiktok} alt="tiktok_logo" />
          <img src={Bbc} alt="bbc_logo" />
          <img src={Trivago} alt="trivago_logo" />
          <img src={Rakuten} alt="rakuten_logo" />
        </Container>
      </Container>
    </Section>
  );
};

export default Portfolio;
