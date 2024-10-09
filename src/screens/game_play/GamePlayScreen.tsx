import React, { useEffect, useState } from 'react';
import {
    Animated,
    Button,
    Image,
    ImageBackground,
    TouchableOpacity,
    View
} from 'react-native';
import { IMAGES } from '../../assets/images/images';
import { RowComponent } from '../../components';

const GamePlayScreen = () => {
  const [ballPosition, setBallPosition] = useState<number | null>(null);
  const [cups, setCups] = useState<boolean[]>([false, false, false]); 
  const [selectedCup, setSelectedCup] = useState<number | null>(null);
  const [gameResult, setGameResult] = useState<string | null>(null);
  const animatedValue = new Animated.Value(0);
  const shuffleCups = () => {
    const randomIndex: number = Math.floor(Math.random() * 3);
    const newCups = [false, false, false];
    newCups[randomIndex] = true;
    setCups(newCups);
    setBallPosition(randomIndex); 
    setSelectedCup(null); 
    startCupSwapAnimation(); 
    setGameResult(null)
  };

  const startCupSwapAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      animatedValue.setValue(0); 
    });
  };

  const handleCupSelect = (index: number) => {
    setSelectedCup(index);
    if (cups[index]) {
      setGameResult('win');
    } else {
      setGameResult('lose');
    }
  };

  useEffect(() => {
    shuffleCups();
  }, []);

  return (
    <ImageBackground
      source={IMAGES.background}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <RowComponent styles={{marginTop: 70}}>
        {cups.map((hasBall, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCupSelect(index)}
            style={{margin: 10}}>
            <Animated.View
              style={{
                transform: [{translateY: selectedCup === index ? -20 : 0}],
              }}>
              <Image
                source={IMAGES.plastic_cup}
                style={{width: 100, height: 100}}
              />
              {selectedCup === index && hasBall && (
                <Image
                  source={IMAGES.ball}
                  style={{
                    width: 50,
                    height: 50,
                    position: 'absolute',
                    bottom: -30,
                    left: 25,
                  }}
                />
              )}
            </Animated.View>
          </TouchableOpacity>
        ))}
      </RowComponent>
      {gameResult && (
        <View style={{position:'absolute'}}>
            <RowComponent>
                <Image source={gameResult=='win'?IMAGES.you_win:IMAGES.you_lose} style={{width: 337, height: 132}}/>
            </RowComponent>
            <RowComponent justify='center' styles={{bottom:-150}}>
                <TouchableOpacity onPress={shuffleCups}>
                    <Image source={IMAGES.tap_to_restart} style={{width: 312, height: 36}} />
                </TouchableOpacity>
            </RowComponent>
        </View>
      )}
    </ImageBackground>
  );
};

export default GamePlayScreen;
