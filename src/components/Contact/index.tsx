import { RightArrow } from "../../assets/svgs";
import { Button, Container } from "../../ui";
import Section from "./styles";

const Contact = () => {
  return (
    <Section>
      <Container>
        <h2 className="header">
          We’re powering the thousands of event organizer businesses.
        </h2>

        <p className="foot-note">Let’s power yours too.</p>

        <div className="btn">
          <Button variant="v-three" className="create-account-btn">
            Create an account

            <RightArrow />
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
