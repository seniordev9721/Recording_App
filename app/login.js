import { useRouter } from 'expo-router';
import { Text, View, Image } from 'react-native';

export default function Gradient() {

  const router = useRouter();

  function logintodashboard() {
    router.replace('/dashboard');
  }

  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Image
        style={{maxWidth:'100%',maxHeight:800}}
        source={require('../assets/splash.png')}
      />
      <Text style={{position:'absolute',top:'28%',textAlign:'center',fontSize:35}}>L o g i n</Text>
      <input style={{position:'absolute',width:200,height:30,top:'38%',textAlign:'center',fontSize:19}} placeholder='Email' type="text"></input>
      <input style={{position:'absolute',width:200,height:30,top:'44%',textAlign:'center',fontSize:19}} placeholder='Password' type="text"></input>
      <button style={{position:'absolute',width:100,height:30,top:'54%',textAlign:'center',fontSize:19}} onClick={logintodashboard}>Login</button>
    </View>
  )
}