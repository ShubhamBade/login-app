import { View, StyleSheet,Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../utils/responsiveDimensions'

export const ImageComponent = () => {
  return (
    <View style={style.container}>
      <Image
        source={require("../assets/images/user.png")}
        style={{
          height:responsiveHeight(35),
          width:responsiveWidth(70),
          resizeMode:'cover'
        }}
      />
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    height:responsiveHeight(35),
    justifyContent:'center',
    alignItems:'center'
  }
})