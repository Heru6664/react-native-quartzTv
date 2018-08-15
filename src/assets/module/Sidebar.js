import {
  Container,
  Content,
  Left,
  ListItem,
  Text,
  View,
  Header
} from "native-base";
import React, { Component } from "react";
import { FlatList } from "react-native";
import { routes } from "./constant/Sidebar";

class Sidebar extends Component {
  render() {
    const { handlePress } = this.props;
    return (
      <Container style={{ backgroundColor: "#2f3640" }}>
        <Content style={{ marginVertical: "20%", backgroundColor: "#2f3640" }}>
          <View>
            <FlatList
              data={routes}
              renderItem={({ item }) => (
                <View>
                  <ListItem
                    style={{ borderBottomColor: "white" }}
                    button
                    onPress={() => handlePress(item.route)}
                  >
                    <Left>
                      <Text style={{ color: "white" }}>{item.name}</Text>
                    </Left>
                  </ListItem>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Sidebar;
