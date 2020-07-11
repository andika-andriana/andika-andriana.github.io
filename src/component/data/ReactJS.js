import React, { Component } from "react";
import {
  Container,
  Button,
  Header,
  Icon,
  Modal,
  Divider,
  List,
  Message
} from "semantic-ui-react";
import ReactPlayer from "react-player";

class ReactJS extends Component {
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
            React JS - Website Movies Menggunakan Redux, Axios, Auth0 dan Open
            API TV Maze
          </Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <p>
                Website Tentang Movie Menggunakan Redux, Axios dengan Open API
                TV Maze dan juga menggunakan autentifikasi login dengan Auth0.
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
                      url="https://github.com/andika-andriana/tv-movie.netlify.com/blob/master/files/TVMovie-Homepage.mp4?raw=true"
                      controls
                      light
                      playing
                    />
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="user" />
                  <List.Content>
                    <List.Header>Test Login Auth0</List.Header>
                    <ReactPlayer
                      url="https://github.com/andika-andriana/tv-movie.netlify.com/blob/master/files/TVMovie-TestLogin.mp4?raw=true"
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
                <List.Item>auth0-js : ^9.12.1,</List.Item>
                <List.Item>axios : ^0.19.1,</List.Item>
                <List.Item>react : ^16.12.0,</List.Item>
                <List.Item>react-dom : ^16.12.0,</List.Item>
                <List.Item>react-redux : ^7.1.3,</List.Item>
                <List.Item>react-responsive-carousel : ^3.1.51,</List.Item>
                <List.Item>react-router-dom : ^5.1.2,</List.Item>
                <List.Item>react-scripts : 3.3.0,</List.Item>
                <List.Item>redux : ^4.0.5,</List.Item>
                <List.Item>semantic-ui-css : ^2.4.1,</List.Item>
                <List.Item>semantic-ui-react : ^0.88.2</List.Item>
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
                  Buat Akun Auth0 (Opsional) Jika ingin menggunakan
                  autentifikasi
                </List.Item>
                <List.Item>
                  Ubah data callback di root:src/Auth/auth0-variables.js dengan
                  data pada Auth0 yang didaftarkan
                </List.Item>
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
            <Message warning style={{ textAlign: "center", fontSize: "12px" }}>
              <Icon name="warning circle" />
              Jika pada saat <b style={{ color: "#377ab1" }}>Live Preview</b>
              &nbsp; data dari Open API TV Maze tidak tampil maka pada browser
              harus dinonaktifkan dahulu Mix-Content agar API dapat tampil. Hal
              ini dikarenakan data dari Open API TV Maze menggunakan protokol
              HTTP. Berikut cara menonaktifkan Mix-Content link:&nbsp;
              <a
                href="https://pearsonnacommunity.force.com/support/s/article/How-to-display-mixed-content-with-Google-Chrome-Internet-Explorer-or-Firefox-1408394589290"
                target="_blank"
                rel="noopener noreferrer"
              >
                Disini
              </a>
            </Message>
            <Button secondary onClick={this.close}>
              <Icon name="remove" inverted />
              Close
            </Button>
            <Button
              primary
              href="https://tv-movie.netlify.com/"
              target="_blank"
            >
              <Icon name="world" inverted />
              Live Preview
            </Button>
            <Button
              positive
              href="https://github.com/andika-andriana/tv-movie.netlify.com"
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
export default ReactJS;
