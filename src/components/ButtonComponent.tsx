import { Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../utils/responsiveDimensions";

interface ButtonComponentInterface {
  title?: string;
}
export const ButtonComponent: React.FC<ButtonComponentInterface & { onPress?: () => void }> = ({
  title = "Get OTP",
  onPress = () => {},
}) => {
  return (
    <Pressable style={style.container} onPress={onPress}>
      <ImageBackground
        source={require("../assets/images/gradient2.jpg")}
        style={{
          height: responsiveHeight(8.5),
          width: responsiveWidth(59),
          justifyContent: "center",
          alignItems: "center",
        }}
        borderRadius={responsiveWidth(8)}
      >
        <Text style={style.textStyle}>{title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    height: responsiveHeight(9),
    width: responsiveWidth(60),
    marginTop: responsiveHeight(10),
    borderRadius: responsiveWidth(8),
    borderColor: "#fff",
    borderWidth: responsiveWidth(1),
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: responsiveFontSize(4.5),
    fontWeight: "bold",
    color: "#fff",
  },
});
