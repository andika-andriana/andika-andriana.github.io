// package Component
import React, { Component } from "react";
import {
  Menu,
  Icon,
  Sidebar,
  Image,
  Tab,
  Container,
  Button,
  Popup,
  Divider,
  Dimmer,
  Loader
} from "semantic-ui-react";

// Pages Component
import Headers from "./Headers";
import Footers from "./Footers";
import Portofolios from "./Portofolios";
import Catatans from "./Catatans";
import Tentang from "./Tentang";

// Data Component
import Bios from "./data/Bios";

export default class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      dimming: false,
      isLoading : true,
    };
    this.opensidebar = this.opensidebar.bind(this);
    this.hidesidebar = this.hidesidebar.bind(this);
  }

  
  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  componentWillUnmount(){
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  opensidebar() {
    this.setState({ dimming: true });
    this.setState({ visible: true });
  }

  hidesidebar() {
    this.setState({ dimming: false });
    this.setState({ visible: false });
  }

  render() {
    let isLoading = this.state.isLoading
    if(isLoading){
      return(
        <Dimmer active>
          <Loader size='massive'/>
        </Dimmer>
      )
    }else{
      const panes = [
        {
          menuItem: { key: 'Portofolio', icon: 'fork', content: 'Portofolio' },
          render: () => (
            <Tab.Pane>
              <Portofolios />
            </Tab.Pane>
          )
        },
        {
          menuItem: { key: 'Catatan', icon: 'book', content: 'Catatan' },
          render: () => (
            <Tab.Pane>
              <Catatans />
            </Tab.Pane>
          )
        },
        {
          menuItem:(
            <Menu.Item key="Tentang" onClick={this.opensidebar}>
              <Popup
                inverted
                position="bottom center"
                content="Munculkan data saya pada sidebar"
                trigger={
                  <Icon name="user"/>
                }
              />Tentang
            </Menu.Item>
          ),
          render: () => (
            <Tab.Pane>
              <Tentang />
            </Tab.Pane>
          )
        }
      ];
      return (
        <Container fluid textAlign='center'>
          <Sidebar
            as={Menu}
            animation="push"
            direction="left"
            visible={this.state.visible}
            inverted
            vertical
          >
            <Image
              src="/images/myava.jpg"
              circular
              size="small"
              centered={true}
              style={{ marginTop: 20 }}
            />
            <Bios />
            <Divider inverted horizontal>
              <Button basic inverted animated onClick={this.hidesidebar}>
                <Button.Content visible>Close</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow left" />
                </Button.Content>
              </Button>
            </Divider>
          </Sidebar>
          <Sidebar.Pusher>
            <Headers />
              <Tab menu={{ pointing:true, secondary:true }} panes={panes}/>
            <Footers />
          </Sidebar.Pusher>
        </Container>
      );
    }
  }
}
