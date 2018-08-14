import React, { Component } from "react";
import { View } from "react-native";
import { Spinner } from "native-base";

export default class Loading extends Component {
  componentWillMount() {
    this.initAnimation();
  }

  initAnimation() {
    if (!this.animation) {
      setTimeout(() => {
        this.initAnimation();
      }, 100);
    } else {
      this.animation.play();
    }
  }

  render() {
    return (
      <View>
        <Spinner />
      </View>
    );
  }
}
