import { Container } from "../../ui";
import { BannerImage } from "../../assets/images";
import { Progress } from "../../assets/svgs";
import Section from "./styles";

const index = () => {
  return (
    <Section>
      <Container className="get-started">
        <div className="image">
          <img src={BannerImage} alt="phone_mockup" />
        </div>

        <div className="step-box">
          <div className="header">
            <h2>How to get started as organizer</h2>
            <p>
              Your journey with vivacity starts here! Just follow theses easy
              steps
            </p>
          </div>

          <div className="steps">
            <div className="vector">
              <Progress />
            </div>
            <div>
              <div className="step-item">
                <h4>Create an account</h4>
                <p>
                  Sign up for an account with either registered business or
                  personal account. it only takes 5 minutes.
                </p>
              </div>
              <div className="step-item">
                <h4>Set up your bank details for withdrawal</h4>
                <p>
                  When you successfully sign up and you make successful sales in
                  your escrow after 3 days you get credited
                </p>
              </div>
              <div className="step-item">
                <h4>Start receiving payments</h4>
                <p>
                  it’s as simple as a normal bank withdrawal automatically to
                  your preferred bank account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default index;
