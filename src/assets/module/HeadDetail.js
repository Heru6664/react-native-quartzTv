import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, ImageBackground } from "react-native";
import { CardItem, Icon, Button } from "native-base";
import { genres } from "./constant/genre";
import { addMovieList } from "../../actions/list";

class HeadDetail extends Component {
  _handleAddMovieList = item => {
    this.props.addMovieList(item);
  };
  render() {
    return (
      <ImageBackground
        style={{
          flex: 1,
          width: null,
          height: 250,
          alignSelf: "stretch"
        }}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${
            this.props.details.backdrop_path
          }`
        }}
      >
        <View style={{ backgroundColor: "rgba(1,1,1,0.5)" }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: "40%",
                height: 212,
                padding: 10,
                paddingBottom: 10
              }}
            >
              <Image
                style={{
                  borderWidth: 2,
                  borderColor: "grey",
                  height: 200,
                  marginBottom: 15
                }}
                source={{
                  uri: `https://image.tmdb.org/t/p/w200${
                    this.props.details.poster_path
                  }`
                }}
              />
            </View>
            <View
              style={{
                width: "58%",
                padding: 10,
                backgroundColor: "rgba(0,0,0,0.7)"
              }}
            >
              <CardItem
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  backgroundColor: "rgba(0,0,0,0)"
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, color: "white" }}
                >
                  {this.props.details.title || this.props.details.original_name}
                </Text>
                <View style={{ width: "100%" }}>
                  {this.props.details.genre_ids.map(id => {
                    return genres
                      .filter(item => item.id === id)
                      .map(data => (
                        <Text style={{ fontSize: 14, color: "white" }}>
                          {data.name}{" "}
                        </Text>
                      ));
                  })}
                </View>
              </CardItem>
            </View>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "white", borderRadius: 100 }}>
              <Button
                onPress={() => this._handleAddMovieList(this.props.details)}
                style={{ borderRadius: 100 }}
                transparent
              >
                <Icon name="add-to-list" type="Entypo" />
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({ details }) => ({
  details: details.movieDetails
});

const mapDispatchToProps = dispatch => ({
  addMovieList: list => dispatch(addMovieList(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeadDetail);
