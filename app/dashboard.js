import { useRouter } from 'expo-router';
import { Text, View, Image } from 'react-native';

export default function Gradient() {

  const router = useRouter();

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={{ maxWidth: '100%', maxHeight: 800 }}
        source={require('../assets/splash.png')}
      />
      <Text style={{position:'absolute',top:'8%',textAlign:'center',fontSize:35}}>Dashboard</Text>
    </View>
  )

}