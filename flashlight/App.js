import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';


const App = () =>{
  const [toggler, setToggler] = useState(false); //false

  const handleChargeToggle = () => setToggler(oldToggle => !oldToggle)

  useEffect (()=>{
    //liga o flash do celular
    Torch.switchState(toggler);
  }, [toggler]);

  useEffect (()=> {
    const subscription = RNShake.addListener(()=>{
      setToggler(oldToggle => !oldToggle);
    })

    // Função vai ser chamada quando o componente 
    //for desmontado
    return () => subscription.remove();
  },[]);
  // Função pra desligar e ligar
  return <View style = {toggler ? style.containerLight : style.containerBlack} >
    

    <TouchableOpacity onPress={handleChargeToggle}>

    
    <Image 
    style = {toggler ? style.lightingOn : style.lightingOff}
    source = { 
      toggler 
      ? require('./assents/icons/eco-light.png')
      : require ('./assents/icons/eco-light-off.png')
    } />
    <Image 
    style = {style.dioLogo}
    source = { 
      toggler 
      ? require('./assents/icons/logo-dio.png')
      : require ('./assents/icons/logo-dio-white.png')
    } />
    </TouchableOpacity>
    </View>
};

export default App

const style = StyleSheet.create({

  containerBlack: {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignItems: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: 150,
    height: 150,
  },
  
});
