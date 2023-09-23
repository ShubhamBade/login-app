import { View, StyleSheet, TextInput } from "react-native";
import React, {useState} from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { ImageComponent } from "../components/ImageComponent";
import { FooterMessageComponent } from "../components/FooterMessageComponent";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../utils/responsiveDimensions";
import { ButtonComponent } from "../components/ButtonComponent";

export const SendOtpScreen = ({navigation}) => {
  const [phone,setPhone]=useState("")
  return (
    <View>
      <HeaderComponent />
      <ImageComponent />
      <View style={style.sendOtpContainer}>
        <TextInput
          style={style.textInputStyle}
          placeholder="Phone Number"
          placeholderTextColor={"#fff"}
          keyboardType="numeric"
          maxLength={10}
          onChangeText={(phone)=>{setPhone(phone)}}
        />
        <ButtonComponent onPress={()=>{navigation.navigate("ValidateotpScreen",{phone})}}/>
      </View>
      <FooterMessageComponent />
    </View>
  );
};

const style = StyleSheet.create({
  sendOtpContainer: {
    height: responsiveHeight(35),
    alignItems: "center"
  },
  textInputStyle: {
    width: responsiveWidth(85),
    height: responsiveHeight(9),
    backgroundColor: "grey",
    borderColor: "#fff",
    marginTop: responsiveHeight(5),
    borderWidth: responsiveWidth(0.5),
    borderRadius: responsiveWidth(8),
    textAlign: "center",
    color: "#fff",
    fontSize: responsiveFontSize(5),
  },
});
