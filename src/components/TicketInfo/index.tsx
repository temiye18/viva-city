import { Button, Container } from "../../ui";
import Section from "./styles";
import { offers } from "../../constants";
import { OfferBg } from "../../assets/images";

const TicketInfo = () => {
  return (
    <Section>
      <Container>
        <h2 className="header">
          All the tools you need to run your event ticket business with ease
        </h2>

        <Container className="tab">
          <p>Ticket Scanner App</p>
          <p>Escrow System</p>
          <p>Event Promotions</p>
          <p>Instant Payout</p>
        </Container>

        <div className="offers-box">
          {offers.map((offer) => (
            <div className="offer-item" key={offer.id}>
              <div>
                <p>{offer.tag}</p>
                <h5>{offer.title}</h5>
                <p>{offer.description}</p>

                {offer.link && (
                  <Button variant="v-three" className="link">
                    {offer.link}
                  </Button>
                )}
              </div>

              <div className="imageBox">
                <img src={offer.image} alt={offer.tag} />
              </div>
            </div>
          ))}
        </div>
      </Container>

      <img src={OfferBg} alt="smiling_lady" className="offer-bg" />
    </Section>
  );
};

export default TicketInfo;
