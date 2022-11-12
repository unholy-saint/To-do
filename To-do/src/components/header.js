import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="bars" size={30} style={styles.icon} />
        <Text style={styles.title}>Remember</Text>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3a9cde",
  },
  title: { fontSize: 25, padding: 10 },
  icon: { padding: 10 },
});
