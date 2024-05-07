import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  backgroundColor,
  foregroundColor,
  width = "100%",
  height = 50,
  marginTop = 10,
  marginBottom = 0,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        backgroundColor ? { backgroundColor: backgroundColor } : {},
        {
          width: width,
          height: height,
          marginTop: marginTop,
          marginBottom: marginBottom,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          foregroundColor ? { color: foregroundColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    marginTop:100,
    backgroundColor: "#39D2C0",
  },

  container_SECONDARY: {
    backgroundColor: "#39D2C0"
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    color: "black",
  },

  text_SECONDARY: {
    color: "black",
  },
  text_TERTIARY: {
    color: "white",
  },
});
