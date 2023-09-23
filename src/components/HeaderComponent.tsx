import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from '../utils/responsiveDimensions'

interface HeaderComponentInterface{
  title?:string
}

export const HeaderComponent : React.FC<HeaderComponentInterface>= ({
  title="Log in"
}) => {
  return (
    <View style={style.container}>
      <Text style={style.headingStyle}>{title}</Text>
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    height:responsiveHeight(15),
    justifyContent:'center',
    alignItems:'center',
  },
  headingStyle:{
    fontSize:responsiveFontSize(6),
    fontWeight:'bold',
    color:"#1338BE"
  }
})
