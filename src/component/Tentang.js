import React, { useState } from "react";
import {
  Button,
  Header,
  Icon,
  Segment,
  Message,
  Form,
  Divider
} from "semantic-ui-react";

const Tentang = () => {
  const [action, setAction] = useState("");
  return (
    <Segment placeholder>
      <Header icon style={{ marginTop: 50 }}>
        <Icon name="pdf file outline" />
        Dokumen dapat diunduh dengan format pdf dengan link dibawah ini.
      </Header>
      <Segment.Inline
        style={{ marginTop: 50 }}
        as={Form}
        method="get"
        action={action}
        target="_blank"
      >
        <Button
          style={{width: 200}}
          primary
          animated="vertical"
          onClick={() => setAction("/docs/CV-AndikaAndriana.pdf")}
        >
          <Button.Content hidden>
            <Icon name="download" />
          </Button.Content>
          <Button.Content visible>Download CV</Button.Content>
        </Button>
        <Button
          style={{width: 200}}
          color="green"
          animated="vertical"
          onClick={() => setAction("/docs/Portofolio-AndikaAndriana.pdf")}
        >
          <Button.Content hidden>
            <Icon name="download" />
          </Button.Content>
          <Button.Content visible>Download Portofolio</Button.Content>
        </Button>
        <Button
          style={{width: 200}}
          secondary
          animated="vertical"
          onClick={() => setAction("/docs/Sertifikat-AndikaAndriana.pdf")}
        >
          <Button.Content hidden>
            <Icon name="download" />
          </Button.Content>
          <Button.Content visible>Download Sertifikat</Button.Content>
        </Button>
        <Divider horizontal style={{ marginTop: 50 }}>
          <a
            href="https://www.linkedin.com/in/andika-andriana/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="linkedin" style={{ color: "black", fontSize: 25 }} />
          </a>
          <a
            href="https://github.com/andika-andriana"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="github" style={{ color: "black", fontSize: 25 }} />
          </a>
        </Divider>
        <Message
          style={{ textAlign: "center", marginTop: 50 }}
          header="Semoga dapat sesuai dengan kebutuhkan Perusahaan."
          content="Wasalam - Andika Andriana"
        />
      </Segment.Inline>
    </Segment>
  );
};

export default Tentang;
