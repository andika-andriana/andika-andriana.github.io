import React from "react";
import { Segment, Header } from "semantic-ui-react";

const Headers = () => (
  <Segment.Group>
    <Segment inverted size="massive" attached="top">
      <Header inverted size="large" style={{ fontFamily: "Pinyon Script" }}>
        Assalamualaikum Warahmatullahi Wabarakatuh
      </Header>
    </Segment>
    <Segment attached="bottom" style={{ fontFamily: "Lato" }}>
      Selamat datang diwebsite saya, seorang junior software developer yang berusaha menuangkan karya kecilnya.
    </Segment>
  </Segment.Group>
);

export default Headers;
