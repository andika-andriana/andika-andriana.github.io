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

class EmberJS extends Component {
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
            Ember JS - Simple CRUD WebApp Dengan MVC Framework
          </Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <p>
                My Library Web Based App, Simple CRUD website dengan Ember.js MVC Framework
              </p>
              <Divider horizontal style={{ marginTop: 50 }}>
                <Header as="h4">
                  <Icon name="video" />
                  Demo
                </Header>
              </Divider>
              <List>
                <List.Item style={{ margin: 20 }}>
                  <List.Icon name="camera" />
                  <List.Content>
                    <List.Header>Screenshot:</List.Header>
                    <Image src="https://raw.githubusercontent.com/andika-andriana/ember_js_-_my_library/master/public/assets/screenshot.png" size="huge" />
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
                <List.Item>@ember/jquery: ^0.6.0</List.Item>
                <List.Item>@ember/optional-features: ^0.7.0</List.Item>
                <List.Item>bootstrap: ^4.5.0</List.Item>
                <List.Item>broccoli-asset-rev: ^3.0.0</List.Item>
                <List.Item>ember-ajax: ^5.0.0</List.Item>
                <List.Item>ember-bootstrap: ^3.0.0</List.Item>
                <List.Item>ember-cli: ~3.12.1</List.Item>
                <List.Item>ember-cli-app-version: ^3.2.0</List.Item>
                <List.Item>ember-cli-babel: ^7.7.3</List.Item>
                <List.Item>ember-cli-dependency-checker: ^3.1.0</List.Item>
                <List.Item>ember-cli-eslint: ^5.1.0</List.Item>
                <List.Item>ember-cli-htmlbars: ^3.0.1</List.Item>
                <List.Item>ember-cli-htmlbars-inline-precompile: ^2.1.0</List.Item>
                <List.Item>ember-cli-inject-live-reload: ^1.8.2</List.Item>
                <List.Item>ember-cli-mirage: ^1.1.7</List.Item>
                <List.Item>ember-cli-moment-shim: ^3.8.0</List.Item>
                <List.Item>ember-cli-sass: ^10.0.1</List.Item>
                <List.Item>ember-cli-sri: ^2.1.1</List.Item>
                <List.Item>ember-cli-template-lint: ^1.0.0-beta.1</List.Item>
                <List.Item>ember-cli-uglify: ^2.1.0</List.Item>
                <List.Item>ember-composable-helpers: ^4.2.1</List.Item>
                <List.Item>ember-data: ~3.12.0</List.Item>
                <List.Item>ember-export-application-global: ^2.0.0</List.Item>
                <List.Item>ember-faker: ^1.5.0</List.Item>
                <List.Item>ember-load-initializers: ^2.0.0</List.Item>
                <List.Item>ember-maybe-import-regenerator: ^0.1.6</List.Item>
                <List.Item>ember-mirage-sauce: 0.0.7</List.Item>
                <List.Item>ember-moment: ^8.0.0</List.Item>
                <List.Item>ember-power-calendar: ^0.16.0</List.Item>
                <List.Item>ember-power-calendar-moment: ^0.1.7</List.Item>
                <List.Item>ember-power-datepicker: ^0.8.0</List.Item>
                <List.Item>ember-power-select: ^3.0.0</List.Item>
                <List.Item>ember-qunit: ^4.4.1</List.Item>
                <List.Item>ember-resolver: ^5.0.1</List.Item>
                <List.Item>ember-source: ~3.12.0</List.Item>
                <List.Item>ember-welcome-page: ^4.0.0</List.Item>
                <List.Item>eslint-plugin-ember: ^6.2.0</List.Item>
                <List.Item>eslint-plugin-node: ^9.0.1</List.Item>
                <List.Item>loader.js: ^4.7.0</List.Item>
                <List.Item>qunit-dom: ^0.8.4</List.Item>
                <List.Item>sass: ^1.26.9</List.Item>
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
                <List.Item>Jalankan pada web:&nbsp;<code>ember serve</code></List.Item>
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
              href="https://github.com/andika-andriana/ember_js_-_my_library"
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
export default EmberJS;
