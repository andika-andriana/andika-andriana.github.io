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

class PHPs extends Component {
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
          <Modal.Header>PHP - Website Online Store Dengan Laravel</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <p>
                Website online store dengan framework Laravel yang terintegrasi
                dengan databases MySQL.
              </p>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="video" />
                  Demo
                </Header>
              </Divider>
              <List>
                <List.Item>
                  <List.Icon name="home" />
                  <List.Content>
                    <List.Header>Homepage</List.Header>
                    <ReactPlayer
                      url="https://github.com/andika-andriana/PHP---Website-Online-Store-Dengan-Laravel/blob/master/File/Etoko-Homepage.mp4?raw=true"
                      controls
                      light
                      playing
                    />
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="user" />
                  <List.Content>
                    <List.Header>Test Register & Login</List.Header>
                    <ReactPlayer
                      url="https://github.com/andika-andriana/PHP---Website-Online-Store-Dengan-Laravel/blob/master/File/Etoko-RegisterLogin.mp4?raw=true"
                      controls
                      light
                      playing
                    />
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="shop" />
                  <List.Content>
                    <List.Header>Test Add to Cart & Checkout</List.Header>
                    <ReactPlayer
                      url="https://github.com/andika-andriana/PHP---Website-Online-Store-Dengan-Laravel/blob/master/File/Etoko-TestOrder.mp4?raw=true"
                      controls
                      light
                      playing
                    />
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="check" />
                  <List.Content>
                    <List.Header>Test Konfirmasi Order</List.Header>
                    <ReactPlayer
                      url="https://github.com/andika-andriana/PHP---Website-Online-Store-Dengan-Laravel/blob/master/File/Etoko-TestKonfirmasi.mp4?raw=true"
                      controls
                      light
                      playing
                    />
                  </List.Content>
                </List.Item>
              </List>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="cogs" />
                  Dependencies
                </Header>
              </Divider>
              <Header as="h5">Vendor</Header>
              <Image src="images/3_wappalyzer.png" />
              <Header as="h5">Package.json</Header>
              <List bulleted>
                <List.Item>"gulp": "^3.9.1"</List.Item>
                <List.Item>"laravel-elixir": "^5.0.0"</List.Item>
                <List.Item>"bootstrap-sass": "^3.0.0"</List.Item>
              </List>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="file archive" />
                  Installasi
                </Header>
              </Divider>
              <List bulleted style={{marginBottom:50}}>
                <List.Item>Download atau clone repository</List.Item>
                <List.Item>Extract folder</List.Item>
                <List.Item>
                  Import db_tokoonline.sql pada folder databases kedalam mysql
                </List.Item>
                <List.Item>
                  Di terminal (CMD):&nbsp;
                  <code>composer install</code>
                </List.Item>
                <List.Item>
                  Kemudian Jalankan project:&nbsp;
                  <code>php artisan serve</code>
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
              href="https://github.com/andika-andriana/PHP---Website-Online-Store-Dengan-Laravel"
              target="_blank"
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
export default PHPs;
