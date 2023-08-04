import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Gradient extends Component {

  render() {
    const  gradientHeight=500;
    const gradientBackground  = 'purple';
    const data = Array.from({ length: gradientHeight });
      return (
          <View style={{flex:1,justifyContent:'center'}}>
              {data.map((_, i) => (
                  <View
                      key={i}
                      style={{
                          position: 'absolute',
                          backgroundColor: gradientBackground,
                          height: 1,
                          bottom: (gradientHeight - i),
                          right: 0,
                          left: 0,
                          zIndex: 2,
                          opacity: (1 / gradientHeight) * (i + 1)
                      }}
                  />
              ))}
              <Text style={{textAlign:'center',alignSelf:'center',fontSize:35}}>Login</Text>
          </View>
      );
  }
}