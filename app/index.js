import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import { withRouter } from "react-router-dom";
export default class Gradient extends Component {

  componentDidMount = () => {
    setTimeout(() => {
      // console.log("asdf")
      window.location.assign('/login')
    }, 3000);
  }

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
              <Text style={{textAlign:'center',alignSelf:'center',fontSize:35}}>AGRICALL</Text>
          </View>
      );
  }
}