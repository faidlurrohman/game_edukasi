import React from 'react';
import {Pressable, Text, ToastAndroid, View} from 'react-native';
import {WIDTH, HEIGHT, SCALE} from '../assets/css/styles';
import Sound from 'react-native-sound';
import {SOUNDS} from '../assets/sounds/sound';

export default Angka = () => {
  const playSound = (parms) => {
    const sound = new Sound(SOUNDS[parms], (error) => callback(error, sound));
  };

  const callback = (error, sound) => {
    if (error) {
      ToastAndroid.showWithGravityAndOffset(
        'Pilih sekali lagi.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return;
    }
    sound.play(() => {
      sound.release();
    });
  };

  return (
    <View style={{flex: 1, height: HEIGHT, width: WIDTH}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => playSound('satu')}>
            <Text
              style={{
                flex: 1,
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(90),
                paddingTop: SCALE(5),
              }}>
              1
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => playSound('dua')}>
            <Text
              style={{
                flex: 1,
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(90),
                paddingTop: SCALE(5),
              }}>
              2
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => playSound('tiga')}>
            <Text
              style={{
                flex: 1,
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(90),
                paddingTop: SCALE(5),
              }}>
              3
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => playSound('empat')}>
            <Text
              style={{
                flex: 1,
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(90),
                paddingTop: SCALE(5),
              }}>
              4
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => playSound('lima')}>
            <Text
              style={{
                flex: 1,
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(90),
                paddingTop: SCALE(5),
              }}>
              5
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => playSound('enam')}>
            <Text
              style={{
                flex: 1,
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(90),
                paddingTop: SCALE(5),
              }}>
              6
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => playSound('tujuh')}>
            <Text
              style={{
                flex: 1,
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(90),
                paddingTop: SCALE(5),
              }}>
              7
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => playSound('delapan')}>
            <Text
              style={{
                flex: 1,
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(90),
                paddingTop: SCALE(5),
              }}>
              8
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => playSound('sembilan')}>
            <Text
              style={{
                flex: 1,
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(90),
                paddingTop: SCALE(5),
              }}>
              9
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => playSound('sepuluh')}>
            <Text
              style={{
                flex: 1,
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(90),
                paddingTop: SCALE(5),
              }}>
              10
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
