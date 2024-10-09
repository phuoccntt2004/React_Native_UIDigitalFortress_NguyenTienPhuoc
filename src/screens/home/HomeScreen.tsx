import React from 'react';
import {
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { IMAGES } from '../../assets/images/images';
import { RowComponent } from '../../components';
const HomeScreen = ({navigation}:any) => {
  return (
    <ImageBackground
      source={IMAGES.home_background}
      style={{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <RowComponent justify="center">
        <Image source={IMAGES.logo} style={{width: 304, height: 132}} />
      </RowComponent>
      <TouchableOpacity style={{marginTop:40}}>
        <RowComponent justify="center" onPress={()=>navigation.navigate('GAMEPLAY')}>
          <Image source={IMAGES.tap_to_play} style={{width: 240, height: 36}} />
        </RowComponent>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default HomeScreen;
