import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils/responsiveDimensions'

export const FooterMessageComponent = () => {
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>By signing up, you agree with our Terms and conditions</Text>
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    height:responsiveHeight(15),
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:responsiveFontSize(4),
    width:responsiveWidth(85),
    textAlign:'center',
    color:"#1338BE"
  }
})