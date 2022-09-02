import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';

export const Counter = () => {
    const [count, setCounter] = useState(0);
  return (
    <View style={{
        flex:1,
        justifyContent: 'space-between',
        backgroundColor:'grey'
      }}>
        <Text style={{
          fontSize:40,
          textAlign: 'center'
        }}> 
            <Button title="<<"
                onPress={()=> setCounter(count-1)}
            />
            Counter: {count}   
            <Button title=">>"
                onPress={()=> setCounter(count+1)}
            />
        </Text>
        

        
            
      </View>
  )
}

