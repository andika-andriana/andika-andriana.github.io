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

class ReactNatives2 extends Component {
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
            React Native - Mini Tracker Mobile Apps
          </Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <p>
                Real-time Mini Tracker App dengan websocket stompJS, rn-maps dan redux
              </p>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="video" />
                  Demo
                </Header>
              </Divider>
              <List>
                <List.Item style={{ margin: 20 }}>
                  <List.Icon name="pin" />
                  <List.Content>
                    <List.Header>ScreenRecord:</List.Header>
                    <Image src="https://raw.githubusercontent.com/andika-andriana/bcak-mini-tracker/master/file/mini-tracker.gif" />
                  </List.Content>
                </List.Item>
              </List>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="cogs" />
                  Dependencies
                </Header>
              </Divider>
              <Header as="h5">Dependencies</Header>
              <List bulleted>
                <List.Item>@react-native-community/geolocation: ^2.0.2</List.Item>
                <List.Item>react: 16.9.0</List.Item>
                <List.Item>react-native: ^0.63.0</List.Item>
                <List.Item>react-native-animatable: ^1.3.3</List.Item>
                <List.Item>react-native-gesture-handler: ^1.5.5</List.Item>
                <List.Item>react-native-maps: ^0.26.1</List.Item>
                <List.Item>react-native-reanimated: ^1.7.0</List.Item>
                <List.Item>react-native-router-flux: ^4.2.0</List.Item>
                <List.Item>react-native-screens: ^2.0.0-alpha.33</List.Item>
                <List.Item>react-redux: ^7.1.3</List.Item>
                <List.Item>react-stomp: ^4.3.0</List.Item>
                <List.Item>redux: ^4.0.5</List.Item>
                <List.Item>redux-form: ^8.3.0</List.Item>
                <List.Item>redux-persist: ^6.0.0</List.Item>
                <List.Item>redux-thunk: ^2.3.0</List.Item>
                <List.Item>typescript: ^3.7.5</List.Item>
              </List>
              <Header as="h5">Devdependencies</Header>
              <List bulleted>
              <List.Item>@babel/core: 7.8.4</List.Item>
              <List.Item>@babel/runtime: 7.8.4</List.Item>
              <List.Item>@react-native-community/eslint-config: 0.0.5</List.Item>
              <List.Item>babel-jest: 24.9.0</List.Item>
              <List.Item>eslint: ^6.8.0</List.Item>
              <List.Item>jest: 24.9.0</List.Item>
              <List.Item>jetifier: ^1.6.5</List.Item>
              <List.Item>metro-react-native-babel-preset: 0.56.4</List.Item>
              <List.Item>react-test-renderer: 16.9.0</List.Item>
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
              href="https://github.com/andika-andriana/bcak-mini-tracker"
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
export default ReactNatives2;
