import { Container, Content, Left, ListItem, Text, View } from "native-base";
import React, { Component } from "react";
import { FlatList } from "react-native";
import { routes } from "./constant/Sidebar";

class Sidebar extends Component {
  render() {
    const { handlePress } = this.props;
    return (
      <Container>
        <Content>
          <View>
            <FlatList
              data={routes}
              renderItem={({ item }) => (
                <View>
                  <ListItem button onPress={() => handlePress(item.route)}>
                    <Left>
                      <Text>{item.name}</Text>
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
