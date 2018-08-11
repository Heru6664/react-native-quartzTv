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
import { FlatList, Image } from "react-native";
import StarRating from "react-native-star-rating";
import ViewMoreText from "react-native-view-more-text";
import styles from "./style/List";

class ListMovie extends Component {
  render() {
    return (
      <Container>
        <Header translucent style={styles.bgNightBlue}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={styles.colWhite} name="ios-arrow-back" type="Ionicons" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.colWhite}>Watched</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.bgBlck}>
          <FlatList
            data={this.props.listMovie}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Card>
                <View>
                  <CardItem button header style={styles.title}>
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
                    <ViewMoreText numberOfLines={2}>
                      <Text>{item.overview}</Text>
                    </ViewMoreText>
                  </CardItem>
                </View>
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

export default connect(mapStateToProps)(ListMovie);
