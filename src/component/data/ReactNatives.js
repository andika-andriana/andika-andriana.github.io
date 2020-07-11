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

class ReactNatives extends Component {
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
            React Native - Mobile Apps Zomato Restaurant
          </Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <p>
                Mobile Apps restoran yang telah terintegrasi dengan open API
                yang disediakan Zomato.
              </p>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="video" />
                  Demo
                </Header>
              </Divider>
              <List>
                <List.Item style={{ margin: 20 }}>
                  <List.Icon name="home" />
                  <List.Content>
                    <List.Header>Home Page</List.Header>
                    <Image src="https://raw.githubusercontent.com/andika-andriana/React-Native---Mobile-App-Restoran-Dengan-Open-API-Zomato/master/file/Home.gif" />
                  </List.Content>
                </List.Item>
                <List.Item style={{ margin: 20 }}>
                  <List.Icon name="food" />
                  <List.Content>
                    <List.Header>Halaman Makanan</List.Header>
                    <Image src="https://raw.githubusercontent.com/andika-andriana/React-Native---Mobile-App-Restoran-Dengan-Open-API-Zomato/master/file/Makanan.gif" />
                  </List.Content>
                </List.Item>
                <List.Item style={{ margin: 20 }}>
                  <List.Icon name="building outline" />
                  <List.Content>
                    <List.Header>Halaman Kota</List.Header>
                    <Image src="https://raw.githubusercontent.com/andika-andriana/React-Native---Mobile-App-Restoran-Dengan-Open-API-Zomato/master/file/Kota.gif" />
                  </List.Content>
                </List.Item>
                <List.Item style={{ margin: 20 }}>
                  <List.Icon name="grid layout" />
                  <List.Content>
                    <List.Header>Halaman Kategori</List.Header>
                    <Image src="https://raw.githubusercontent.com/andika-andriana/React-Native---Mobile-App-Restoran-Dengan-Open-API-Zomato/master/file/Kategori.gif" />
                  </List.Content>
                </List.Item>
              </List>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="mobile alternate" />
                  Spesifikasi
                </Header>
              </Divider>
              <Header as="h5" block>
                Karena keterbatasan RAM maka dibuat dengan resolusi: 400x800
                hdpi <Icon name="smile outline" />
              </Header>
              <List bulleted>
                <List.Item>OS: Android 8.1 x86</List.Item>
                <List.Item>RAM : 1 GB</List.Item>
              </List>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="cogs" />
                  Dependencies
                </Header>
              </Divider>
              <Header as="h5">Dependencies</Header>
              <List bulleted>
                <List.Item>
                  @react-native-community/masked-view - ^0.1.5
                </List.Item>
                <List.Item>axios - ^0.19.1</List.Item>
                <List.Item>native-base - ^2.13.8</List.Item>
                <List.Item>react - 16.9.0</List.Item>
                <List.Item>react-native - 0.61.5</List.Item>
                <List.Item>react-native-eject - ^0.1.2</List.Item>
                <List.Item>react-native-gesture-handler - ^1.5.3</List.Item>
                <List.Item>react-native-image-slider - ^2.0.3</List.Item>
                <List.Item>react-native-reanimated - ^1.4.0</List.Item>
                <List.Item>react-native-safe-area-context - ^0.6.2</List.Item>
                <List.Item>react-native-screens - ^2.0.0-alpha.23</List.Item>
                <List.Item>react-navigation - ^4.0.10</List.Item>
                <List.Item>react-navigation-stack - ^2.0.13</List.Item>
              </List>
              <Header as="h5">Devdependencies</Header>
              <List bulleted>
                <List.Item>@babel/core - ^7.7.7</List.Item>
                <List.Item>@babel/runtime - ^7.7.7</List.Item>
                <List.Item>
                  @react-native-community/eslint-config - ^0.0.5
                </List.Item>
                <List.Item>babel-jest - ^24.9.0</List.Item>
                <List.Item>eslint - ^6.8.0</List.Item>
                <List.Item>jest - ^24.9.0</List.Item>
                <List.Item>metro-react-native-babel-preset - ^0.57.0</List.Item>
                <List.Item>react-test-renderer - 16.9.0</List.Item>
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
                  Install dependencies:&nbsp;
                  <code>npm install</code>
                  &nbsp;atau&nbsp;
                  <code>yarn install</code>
                </List.Item>
                <List.Item>
                  Jalankan pada emulator:&nbsp;
                  <code>yarn android</code>
                  &nbsp; atau&nbsp;
                  <code>yarn ios</code>
                </List.Item>
                <List.Item>
                  (Opsional) Jalankan pada web:&nbsp;
                  <code>yarn start:web</code>
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
              href="https://github.com/andika-andriana/React-Native---Mobile-App-Restoran-Dengan-Open-API-Zomato"
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
export default ReactNatives;
