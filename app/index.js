import { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Gradient() {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/login');
    }, 3000);
  })

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Image
        style={{maxWidth:'100%',maxHeight:800}}
        source={require('../assets/splash.png')}
      />
      <Text style={{position:'absolute',width:'100%',top:'50%',textAlign:'center',fontSize:35}}>A G R I C A L L</Text>
    </View>
  );
}

// export default class Gradient extends Component {

//   componentDidMount = () => {
//     setTimeout(() => {
//       // console.log("asdf");
//       window.location.assign('/login');
//     }, 3000);
//   }

//   render() {
//     const  gradientHeight=500;
//     const gradientBackground  = 'purple';
//     const data = Array.from({ length: gradientHeight });
//       return (
//           // <View style={{flex:1,justifyContent:'center'}}>
//           //     {data.map((_, i) => (
//           //         <View
//           //             key={i}
//           //             style={{
//           //                 position: 'absolute',
//           //                 backgroundColor: gradientBackground,
//           //                 height: 1,
//           //                 bottom: (gradientHeight - i),
//           //                 right: 0,
//           //                 left: 0,
//           //                 zIndex: 2,
//           //                 opacity: (1 / gradientHeight) * (i + 1)
//           //             }}
//           //         />
//           //     ))}
//           //     <Text style={{textAlign:'center',alignSelf:'center',fontSize:35}}>AGRICALL</Text>
//           // </View>
//           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//             <Image
//               style={{maxWidth:'100%',maxHeight:800}}
//               source={require('../assets/splash.png')}
//             />
//             <Text style={{position:'absolute',width:'100%',top:'50%',textAlign:'center',fontSize:35}}>A G R I C A L L</Text>
//           </View>
//       );
//   }
// }