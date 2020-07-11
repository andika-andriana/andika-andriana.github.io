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

class Golangs extends Component {
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
          <Modal.Header>Golang - Food Web dengan Framework Echo</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <p>
                Website Food menggunakan framework echo yang terintegrasi dengan
                database MySQL.
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
                    <List.Header>Home Page</List.Header>
                    <ReactPlayer
                      url="https://github.com/andika-andriana/Golang---Food-Web-dengan-Framework-Echo/blob/master/Files/Home-Page.mp4?raw=true"
                      controls
                      light
                      playing
                    />
                  </List.Content>
                </List.Item>
              </List>
              <List>
                <List.Item>
                  <List.Icon name="home" />
                  <List.Content>
                    <List.Header>Home Page 2</List.Header>
                    <List.Description>With js scrollspy</List.Description>
                    <ReactPlayer
                      url="https://github.com/andika-andriana/Golang---Food-Web-dengan-Framework-Echo/blob/master/Files/Home-Page1.mp4?raw=true"
                      controls
                      light
                      playing
                    />
                  </List.Content>
                </List.Item>
              </List>
              <List>
                <List.Item>
                  <List.Icon name="shopping cart" />
                  <List.Content>
                    <List.Header>Order Page</List.Header>
                    <List.Description>
                      Create order test to database
                    </List.Description>
                    <ReactPlayer
                      url="https://github.com/andika-andriana/Golang---Food-Web-dengan-Framework-Echo/blob/master/Files/Order-Page.mp4?raw=true"
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
                  Package
                </Header>
              </Divider>
              <Header as="h5">Vendor</Header>
              <Image src="images/1_wappalyzer.png" />
              <Header as="h5">Package</Header>
              <List bulleted>
                <List.Item>labstack</List.Item>
                <List.Item>mattn</List.Item>
                <List.Item>valyala</List.Item>
                <List.Item>crypto</List.Item>
                <List.Item>sys</List.Item>
                <List.Item>go mySQL driver</List.Item>
              </List>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="file archive" />
                  Installasi
                </Header>
              </Divider>
              <List bulleted>
                <List.Item>Download atau Clone Repository.</List.Item>
                <List.Item>
                  Extract kedalam folder baru berinama <b>echo</b> →
                  C:/Go/src/echo/(file download)
                </List.Item>
                <List.Item>
                  Jalankan: <code>go run main.go</code>
                </List.Item>
              </List>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="rocket" />
                  API Routes
                </Header>
              </Divider>
              <Image
                src="https://raw.githubusercontent.com/andika-andriana/Golang---Food-Web-dengan-Framework-Echo/master/Files/Postman.gif"
                size="huge"
                style={{marginBottom:50}}
              />
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
              href="https://github.com/andika-andriana/Golang---Food-Web-dengan-Framework-Echo"
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

export default Golangs;
