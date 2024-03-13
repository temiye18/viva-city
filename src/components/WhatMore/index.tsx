import { Container } from "../../ui";
import Section from "./styles";
import { more } from "../../constants";

const WhatMore = () => {
  return (
    <Section>
      <Container>
        <div className="question-box">
          <h2>What's more?</h2>
          <p>Explore more ways to take your business to the next level.</p>
        </div>

        <div className="perks">
          {more.map((item) => (
            <div key={item.id}>
              <item.icon />
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default WhatMore;
