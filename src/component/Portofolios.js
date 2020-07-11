import React from "react";
import { Card, Image } from "semantic-ui-react";
import Golangs from "./data/Golangs";
import NodeJS1 from "./data/NodeJS1";
import PHPs from "./data/PHPs";
import ReactNatives from "./data/ReactNatives";
import ReactJS from "./data/ReactJS";
import NodeJS2 from "./data/NodeJS2";
import ReactNatives2 from "./data/ReactNatives2";
import EmberJS from "./data/EmberJS";

const items = [
  {
    image: "/images/lang/Golang.png",
    header: "Golang - Web Food Dengan Framework Echo",
    description:
      "Website food menggunakan framework echo yang terintegrasi dengan database MySQL.",
    meta: <Golangs />
  },
  {
    image: "/images/lang/NodeJS.png",
    header: "Node JS - Web Payment Integration",
    description:
      "Website Payment terintegrasi dengan Paystack dan database MongoDB.",
    meta: <NodeJS1 />
  },
  {
    image: "/images/lang/PHP.png",
    header: "PHP - Online Store Web Dengan Framework Laravel",
    description:
      "Website online store dengan framework Laravel yang terintegrasi dengan databases MySQL.",
    meta: <PHPs />
  },
  {
    image: "/images/lang/ReactNative.png",
    header: "React Native - Mobile Apps Dengan API Zomato",
    description:
      "Mobile Apps restoran yang telah terintegrasi dengan open API yang disediakan Zomato.",
    meta: <ReactNatives />
  },
  {
    image: "/images/lang/React.png",
    header:
      "React JS - Website Movies Menggunakan Redux, Axios, Auth0 dan Open API TV Maze.",
    description:
      "Website Movie Menggunakan Redux, Axios dengan Open API TV Maze dan juga menggunakan autentikasi login dengan Auth0.",
    meta: <ReactJS />
  },
  {
    image: "/images/lang/NodeJS.png",
    header: "Node JS - Movie Manager Web Dengan Framework Express",
    description:
      "Website pengolahan waktu tayang film menggunakan framework Express yang terintegrasi dengan MongoDB.",
    meta: <NodeJS2 />
  },
  {
    image: "/images/lang/ReactNative.png",
    header: "React Native - Mini Tracker Mobile Apps",
    description: "Real-time Mini Tracker App dengan websocket stompJS, rn-maps dan redux",
    meta: <ReactNatives2/>
  },
  {
    image: "/images/lang/EmberJS.png",
    header: "Ember JS - Simple CRUD WebApp Dengan MVC Framework",
    description: "My Library Web Based App, Simple CRUD website dengan Ember.js MVC Framework",
    meta: <EmberJS/>
  }
];

const Portofolios = () => (
  <Card.Group centered>
    {items.map((data, key) => (
      <Card style={{ textAlign: "center", marginTop: 10 }} key={key}>
        <Image src={data.image} wrapped style={{ backgroundColor: "white" }} />
        <Card.Content style={{ height: 200 }}>
          <Card.Header>{data.header}</Card.Header>
          <Card.Description style={{ padding: 10 }}>
            <span>{data.description}</span>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>{data.meta}</Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default Portofolios;
