import React, { Component } from "react";
import { Card, Text, CardItem, Icon } from "native-base";

class NetworkNotice extends Component {
  render() {
    return (
      <Card>
        <CardItem
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Icon name="warning" type="FontAwesome" />
          <Text>
            Network Error
            {"\n"}
          </Text>

          <Text>Check your internet connection</Text>
        </CardItem>
      </Card>
    );
  }
}

export default NetworkNotice;
