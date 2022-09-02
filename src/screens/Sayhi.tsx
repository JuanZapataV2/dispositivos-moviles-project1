import React from 'react'
import { Text, View } from 'react-native'

export const Sayhi = () => {
  return (
    <View style={{
        flex:1,
        justifyContent: 'center',
        backgroundColor:'grey'
      }}>
        <Text style={{
          fontSize:55,
          textAlign: 'center'
        }}>This is my first app using React Native :D</Text>
      </View>
  )
}
