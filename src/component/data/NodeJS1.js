import React, { Component } from "react";
import {
  Container,
  Button,
  Header,
  Icon,
  Modal,
  Divider,
  List,
  Image
} from "semantic-ui-react";
import ReactPlayer from "react-player";

class NodeJS1 extends Component {
  state = { open: false };
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };
  close = () => this.setState({ open: false });
  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
    return (
      <Container>
        <Button
          onClick={this.closeConfigShow(true, false)}
          inverted
          color="green"
        >
          Baca Selengkapnya
        </Button>

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
          dimmer="blurring"
        >
          <Modal.Header>
            Node JS - Payment Web Integration Dengan Paystack
          </Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <p>
                Website Payment terintegrasi dengan Paystack dan database
                MongoDB.
              </p>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="video" />
                  Demo
                </Header>
              </Divider>
              <List>
                <List.Item>
                  <List.Icon name="cc visa" />
                  <List.Content>
                    <List.Header>Test Donation Payment</List.Header>
                    <ReactPlayer
                      url="https://github.com/andika-andriana/Node-JS---Payment-Web-Integration-Dengan-Paystack/blob/master/files/Demo_App.mp4?raw=true"
                      controls
                      light
                      playing
                    />
                  </List.Content>
                </List.Item>
              </List>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="payment" />
                  Email Receipt
                </Header>
              </Divider>
              <Image src="images/paystack_receipt.png" size="huge"/>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="cogs" />
                  Dependencies
                </Header>
              </Divider>
              <Header as="h5">Vendor</Header>
              <Image src="images/2_wappalyzer.png" />
              <Header as="h5">Package.json</Header>
              <List bulleted>
                <List.Item>body-parser → ^1.18.3</List.Item>
                <List.Item>express → ^4.16.4</List.Item>
                <List.Item>mongoose → ^5.3.14</List.Item>
                <List.Item>pug → ^2.0.3</List.Item>
                <List.Item>request → ^2.88.0</List.Item>
              </List>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="file archive" />
                  Installasi
                </Header>
              </Divider>
              <List bulleted style={{marginBottom: 50}}>
                <List.Item>Download atau clone repository</List.Item>
                <List.Item>Extract folder</List.Item>
                <List.Item>Membuat akun paystack</List.Item>
                <List.Item>
                  Copy dan update the secret key pada config/paystack.js
                </List.Item>
                <List.Item>
                  Install dependencies. Jalankan kode: <code>npm install</code>
                  &nbsp;pada folder root.
                </List.Item>
                <List.Item>
                  Jalankan Aplikasi <code>node app</code>
                </List.Item>
              </List>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              secondary
              icon="remove"
              labelPosition="left"
              content="Close"
              onClick={this.close}
            />
            <Button
              positive
              href="https://github.com/andika-andriana/Node-JS---Payment-Web-Integration-Dengan-Paystack"
              target="_blank"
              color="black"
              labelPosition="right"
              icon="chevron right"
              content="Lihat Ke Repository"
            />
          </Modal.Actions>
        </Modal>
      </Container>
    );
  }
}
export default NodeJS1;
