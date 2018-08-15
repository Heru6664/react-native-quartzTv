import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title
} from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
import HeadDetail from "../assets/module/HeadDetail";
import { StatusBar } from "react-native";

class Details extends Component {
  render() {
    return (
      <Container>
        <StatusBar hidden={true} />
        <Header translucent style={{ backgroundColor: "#353b48" }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                style={{ color: "white" }}
                name="ios-arrow-back"
                type="Ionicons"
              />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "white" }}>Details</Title>
          </Body>
          <Right />
        </Header>
        <Content
          style={{
            backgroundColor: "#2f3640"
          }}
        >
          <HeadDetail />
          <Card>
            <CardItem
              header
              bordered
              style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
            >
              <Text style={{ color: "white" }}>Overview</Text>
            </CardItem>
            <CardItem style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
              <Text style={{ color: "white" }}>
                {this.props.details.overview}
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ details }) => ({
  details: details.movieDetails
});

export default connect(mapStateToProps)(Details);
