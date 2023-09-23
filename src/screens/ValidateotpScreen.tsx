import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { ImageComponent } from "../components/ImageComponent";
import { FooterMessageComponent } from "../components/FooterMessageComponent";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../utils/responsiveDimensions";
import { ButtonComponent } from "../components/ButtonComponent";

export const ValidateotpScreen = ({ navigation, route }) => {
  const { phone } = route.params;
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <HeaderComponent title="OTP Verify" />
      <ImageComponent />
      <View style={style.otpContainer}>
        <Text style={style.textStyle}>OTP Sent to</Text>
        <Text style={style.textStyle}>+91 {phone}</Text>
        <View style={{ flexDirection: "row" }}>
          <FlatList
            data={[1, 2, 3, 4]}
            style={{marginTop:responsiveHeight(1)}}
            renderItem={({ item }) => (
              <TextInput
                style={style.textInputStyle}
                maxLength={1}
                keyboardType="numeric"
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ marginTop: responsiveHeight(-5) }}>
          <ButtonComponent
            title="Verify OTP"
            onPress={() => {
              setShowModal(true);
            }}
          />
        </View>
      </View>
      <FooterMessageComponent />
      <Modal transparent={true} visible={showModal}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={[style.textStyle, { textAlign: "center" }]}>
              “Your details has been submitted”
            </Text>
            <Pressable
              style={style.buttonStyle}
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text style={{ color: "#fff" }}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  otpContainer: {
    height: responsiveHeight(35),
    width: responsiveWidth(85),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: responsiveFontSize(5),
    fontWeight: "bold",
    color: "#1338BE",
  },
  textInputStyle: {
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    margin: responsiveWidth(3),
    borderRadius: responsiveWidth(3),
    borderColor: "#fff",
    fontSize: responsiveFontSize(5),
    textAlign: "center",
    color: "#fff",
    borderWidth: responsiveWidth(0.5),
    backgroundColor: "grey",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "pink",
    height: responsiveHeight(25),
    width: responsiveWidth(85),
    borderRadius: responsiveWidth(5),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 5,
  },
  buttonStyle: {
    width: responsiveWidth(30),
    height: responsiveHeight(4),
    marginTop: responsiveHeight(4),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0492C2",
    borderColor: "#fff",
    borderWidth: responsiveWidth(0.5),
    borderRadius: responsiveWidth(8),
  },
});
