import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Input,
  Item,
  Label,
  Left,
  Right,
  Text,
  Title,
  View
} from "native-base";
import React, { Component } from "react";
import { FlatList, Image, StatusBar } from "react-native";
import Modal from "react-native-modalbox";
import StarRating from "react-native-star-rating";
import ViewMoreText from "react-native-view-more-text";
import { connect } from "react-redux";
import { getMovieDetails } from "../actions/details";
import { searchMovie } from "../actions/Search";
import Loading from "../assets/module/Loading";
import styles from "./style/home";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchVal: "",
      totalResult: "",
      result: false
    };
  }

  getResult = () => {
    let uri = encodeURI(this.state.searchVal);
    this.props
      .searchMovie(uri)
      .then(res => {
        return this.setState({
          totalResult: res.total_results,
          result: !this.state.result
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  showDetails = item => {
    this.props.getMovieDetails(item);
    this.props.navigation.navigate("Details");
  };

  render() {
    return (
      <Container>
        <Modal
          style={styles.modal}
          swipeToClose={false}
          backdropPressToClose={false}
          coverScreen={true}
          isOpen={this.props.loading}
        >
          <Loading style={styles.loadAnimation} />
        </Modal>
        <StatusBar barStyle="light-content" />
        <Header translucent style={styles.bgNightBlue}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon style={styles.colWhite} name="menu" type="Entypo" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.colWhite}>Movies</Title>
          </Body>
          <Right />
        </Header>
        <Content style={[styles.bgBlck, styles.content]}>
          <Card>
            <CardItem style={styles.bgNightBlue}>
              <Text style={styles.colWhite}>Search Movie</Text>
            </CardItem>
            <CardItem style={styles.bgNightBlue}>
              <Item floatingLabel style={styles.searchBar}>
                <Label style={styles.colWhite}>Search ..</Label>
                <Input
                  style={styles.colWhite}
                  onChangeText={val => this.setState({ searchVal: val })}
                />
              </Item>
              <Button onPress={() => this.getResult()} transparent>
                <Icon style={styles.colWhite} name="search" type="EvilIcons" />
              </Button>
            </CardItem>
            {this.state.result ? (
              <CardItem style={styles.result}>
                <Text style={styles.colWhite}>
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
                  <View style={styles.card}>
                    <View style={styles.posterContainer}>
                      <Image
                        style={styles.poster}
                        source={{
                          uri: `https://image.tmdb.org/t/p/w200${
                            item.poster_path
                          }`
                        }}
                      />
                    </View>
                    <View style={styles.details}>
                      <CardItem
                        onPress={() => this.showDetails(item)}
                        button
                        header
                        style={styles.title}
                      >
                        <Text style={styles.defSize}>
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
  searchMovie: data => dispatch(searchMovie(data)),
  getMovieDetails: det => dispatch(getMovieDetails(det))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
