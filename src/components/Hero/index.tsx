import { RightContent } from "../../assets/svgs";
import Section from "./styles";
import { Container } from "../../ui";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div className="hero-container">
          <div>
            <div className="text-box">
              <h1>It’s Digital Ticketing. Simplified.</h1>
              <h5>Experience it now.</h5>
            </div>

            <div className="image-box">
              <RightContent />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
