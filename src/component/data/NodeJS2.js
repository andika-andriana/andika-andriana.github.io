import React, { Component } from "react";
import {
  Container,
  Button,
  Header,
  Icon,
  Modal,
  Divider,
  List
} from "semantic-ui-react";
import ReactPlayer from "react-player";

class NodeJS2 extends Component {
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
            Node JS - Movie Manager Web Dengan Framework Express
          </Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <p>
                Website pengolahan waktu tayang film menggunakan framework
                Express yang terintegrasi dengan MongoDB.
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
                      url="https://github.com/andika-andriana/Node-JS---Web-Movie-Manager-Dengan-Framework-Express/blob/master/files/MovieManager-HomePage.mp4?raw=true"
                      controls
                      light
                      playing
                    />
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="user add" />
                  <List.Content>
                    <List.Header>Test Register & Login</List.Header>
                    <ReactPlayer
                      url="https://github.com/andika-andriana/Node-JS---Web-Movie-Manager-Dengan-Framework-Express/blob/master/files/MovieManager-TestRegisterLogin.mp4?raw=true"
                      controls
                      light
                      playing
                    />
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="film" />
                  <List.Content>
                    <List.Header>
                      Test Create, Read, Update and Delete Movie
                    </List.Header>
                    <ReactPlayer
                      url="https://github.com/andika-andriana/Node-JS---Web-Movie-Manager-Dengan-Framework-Express/blob/master/files/MovieManager-TestCRUD-Movie.mp4?raw=true"
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
              <List bulleted>
                <List.Item>bcrypt: ^3.0.7,</List.Item>
                <List.Item>body-parser: ^1.19.0,</List.Item>
                <List.Item>connect-flash: ^0.1.1,</List.Item>
                <List.Item>cookie-parser: ~1.4.4,</List.Item>
                <List.Item>debug: ~2.6.9,</List.Item>
                <List.Item>ejs: ~2.6.1,</List.Item>
                <List.Item>express: ~4.16.1,</List.Item>
                <List.Item>express-ejs-layouts: ^2.5.0,</List.Item>
                <List.Item>express-session: ^1.17.0,</List.Item>
                <List.Item>http-errors: ~1.6.3,</List.Item>
                <List.Item>moment: ^2.24.0,</List.Item>
                <List.Item>mongoose: ^5.8.7,</List.Item>
                <List.Item>morgan: ~1.9.1,</List.Item>
                <List.Item>passport: ^0.4.1,</List.Item>
                <List.Item>passport-local: ^1.0.0</List.Item>
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
                  Install dependencies :&nbsp;
                  <code>npm install</code>
                  &nbsp;atau&nbsp;
                  <code>yarn install</code>
                </List.Item>
                <List.Item>
                  Jalankan aplikasi :&nbsp;
                  <code>npm start</code>
                </List.Item>
              </List>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button secondary onClick={this.close}>
              <Icon name="remove" inverted />
              Close
            </Button>
            <Button
              primary
              href="https://andikaandriana-moviemanager.herokuapp.com/"
              target="_blank"
            >
              <Icon name="world" inverted />
              Live Preview
            </Button>
            <Button
              positive
              href="https://github.com/andika-andriana/Node-JS---Web-Movie-Manager-Dengan-Framework-Express"
              target="_blank"
            >
              Lihat Ke Repository
              <Icon name="chevron right" />
            </Button>
          </Modal.Actions>
        </Modal>
      </Container>
    );
  }
}
export default NodeJS2;
