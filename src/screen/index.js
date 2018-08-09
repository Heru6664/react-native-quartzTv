import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Icon,
  Title,
  Body,
  Text,
  Right,
  Button,
  Content,
  Card,
  CardItem,
  Item,
  Label,
  Input
} from "native-base";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { searchMovie } from "../actions/Search";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchVal: ""
    };
  }

  renderResult = () => {
    this.props
      .searchMovie(this.state.searchVal)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Header translucent style={{ backgroundColor: "rgba(1,1,1,0.8)" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon style={{ color: "white" }} name="menu" type="Entypo" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "white" }}>Movies</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ backgroundColor: "black", padding: 15 }}>
          <Card>
            <CardItem style={{ backgroundColor: "rgba(1,1,1,0.8)" }}>
              <Text style={{ color: "white" }}>
                Search Movie that had been watched
              </Text>
            </CardItem>
            <CardItem style={{ backgroundColor: "rgba(1,1,1,0.8)" }}>
              <Item floatingLabel style={{ width: "80%" }}>
                <Label style={{ color: "white" }}>Search Movie Tittle ..</Label>
                <Input
                  style={{ color: "white" }}
                  onChangeText={val => this.setState({ searchVal: val })}
                />
              </Item>
              <Button onPress={() => this.renderResult()} transparent>
                <Icon
                  style={{ color: "white" }}
                  name="search"
                  type="EvilIcons"
                />
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchMovie: data => dispatch(searchMovie(data))
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
