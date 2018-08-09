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
  Input,
  View
} from "native-base";
import ViewMoreText from "react-native-view-more-text";
import { StatusBar, FlatList, Image } from "react-native";
import { connect } from "react-redux";
import { searchMovie } from "../actions/Search";
import StarRating from "react-native-star-rating";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchVal: "",
      totalResult: ""
    };
  }

  getResult = () => {
    let uri = encodeURI(this.state.searchVal);
    this.props
      .searchMovie(uri)
      .then(res => {
        return this.setState({ totalResult: res.total_results });
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Header translucent style={{ backgroundColor: "#353b48" }}>
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
        <Content style={{ backgroundColor: "#2f3640", padding: 5 }}>
          <Card>
            <CardItem style={{ backgroundColor: "#353b48" }}>
              <Text style={{ color: "white" }}>
                Search Movie that had been watched
              </Text>
            </CardItem>
            <CardItem style={{ backgroundColor: "#353b48" }}>
              <Item floatingLabel style={{ width: "80%" }}>
                <Label style={{ color: "white" }}>Search ..</Label>
                <Input
                  style={{ color: "white" }}
                  onChangeText={val => this.setState({ searchVal: val })}
                />
              </Item>
              <Button onPress={() => this.getResult()} transparent>
                <Icon
                  style={{ color: "white" }}
                  name="search"
                  type="EvilIcons"
                />
              </Button>
            </CardItem>
            {this.props.loading ? (
              <CardItem
                style={{
                  backgroundColor: "#353b48",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{ color: "white" }}>
                  {" "}
                  Total {this.state.totalResult} Found
                </Text>
              </CardItem>
            ) : null}
          </Card>
          <View>
            <FlatList
              data={this.props.result.results}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Card>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        width: "40%",
                        height: 212,
                        padding: 5,
                        paddingBottom: 10
                      }}
                    >
                      <Image
                        style={{ height: 200 }}
                        source={{
                          uri: `https://image.tmdb.org/t/p/w200${
                            item.poster_path
                          }`
                        }}
                      />
                    </View>
                    <View style={{ width: "58%" }}>
                      <CardItem
                        header
                        style={{
                          flexDirection: "column",
                          alignItems: "flex-start"
                        }}
                      >
                        <Text style={{ fontSize: 14 }}>
                          {item.title || item.original_name}
                        </Text>
                        <Text note>{item.release_date}</Text>
                        <CardItem>
                          <StarRating
                            disabled
                            maxStars={1}
                            starSize={15}
                            fullStarColor="#FFD700"
                            rating={1}
                          />
                          <Text> {item.vote_average}</Text>
                        </CardItem>
                      </CardItem>
                      <CardItem>
                        <ViewMoreText numberOfLines={3}>
                          <Text>{item.overview}</Text>
                        </ViewMoreText>
                      </CardItem>
                    </View>
                  </View>
                </Card>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ SearchResult }) => ({
  loading: SearchResult.loading,
  result: SearchResult.result
});

const mapDispatchToProps = dispatch => ({
  searchMovie: data => dispatch(searchMovie(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
