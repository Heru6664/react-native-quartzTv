import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  View,
  Card,
  CardItem
} from "native-base";
import { FlatList, Alert, TouchableOpacity } from "react-native";
import StarRating from "react-native-star-rating";
import ViewMoreText from "react-native-view-more-text";
import styles from "./style/List";
import { removeMovie } from "../actions/list";

class ListMovie extends Component {
  deleteMovie = index => {
    Alert.alert("Are you sure?", "It can not resolve anymore", [
      { text: "Cancel", onPress: () => console.log("Cancel") },
      { text: "OK", onPress: () => this.props.removeMovie(index) }
    ]);
  };

  render() {
    return (
      <Container>
        <View style={styles.appBar} />
        <Header translucent style={styles.bgNightBlue}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                style={styles.colWhite}
                name="ios-arrow-back"
                type="Ionicons"
              />
            </Button>
          </Left>
          <Body>
            <Title style={styles.colWhite}>Watched</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.bgBlck}>
          <CardItem style={styles.bgBlck}>
            <Text style={styles.colWhite}>
              Total Movie : {this.props.listMovie.length}
            </Text>
          </CardItem>
          <FlatList
            data={this.props.listMovie}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Card>
                <CardItem
                  style={{
                    width: "100%",
                    borderBottomColor: "grey",
                    borderBottomWidth: 0.2
                  }}
                >
                  <View style={{ width: "75%" }}>
                    <TouchableOpacity>
                      <Text style={[styles.defSize, styles.title]}>
                        {item.title || item.original_name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: "25%" }}>
                    <Right>
                      <Button
                        onPress={() => this.deleteMovie(index)}
                        transparent
                      >
                        <Text>Delete</Text>
                        <Icon type="EvilIcons" name="trash" />
                      </Button>
                    </Right>
                  </View>
                </CardItem>
                <CardItem>
                  <Text note>{item.release_date}</Text>
                  <StarRating
                    disabled
                    maxStars={1}
                    starSize={15}
                    fullStarColor="#FFD700"
                    rating={1}
                  />
                  <Text> {item.vote_average}</Text>
                </CardItem>
                <CardItem>
                  <ViewMoreText numberOfLines={2}>
                    <Text>{item.overview}</Text>
                  </ViewMoreText>
                </CardItem>
              </Card>
            )}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ list }) => ({
  listMovie: list.movies
});

const mapDispatchToProps = dispatch => ({
  removeMovie: id => dispatch(removeMovie(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMovie);
