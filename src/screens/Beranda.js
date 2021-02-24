import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View, BackHandler} from 'react-native';
import {WIDTH, HEIGHT, SCALE, COLOR} from '../assets/css/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const forImage = HEIGHT / 2.4;

const MainView = (navigation) => {
  return (
    <View style={{flex: 1, height: HEIGHT, width: WIDTH}}>
      <View style={{flex: 0}}>
        <Image
          style={{width: WIDTH, height: forImage}}
          source={require('../assets/images/brd.jpeg')}
        />
      </View>
      <View
        style={{
          flex: 0,
          padding: SCALE(10),
          backgroundColor: COLOR.aqua,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'PaytoneOne',
            fontSize: SCALE(18),
            color: COLOR.white,
          }}>
          GAME EDUKASI BAHASA INGGRIS
        </Text>
      </View>
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Pressable
              onPress={() => navigation.navigate('Angka')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: SCALE(100),
                height: SCALE(100),
                backgroundColor: COLOR.aqua,
                borderRadius: SCALE(10000),
                elevation: 2,
              }}>
              <MaterialCommunityIcons
                name="format-list-numbered"
                color={COLOR.white}
                size={SCALE(70)}
              />
            </Pressable>
            <Text
              style={{
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(16),
                paddingTop: SCALE(5),
                color: COLOR.black,
              }}>
              MENGENAL ANGKA
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Pressable
              onPress={() => navigation.navigate('Huruf')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: SCALE(100),
                height: SCALE(100),
                backgroundColor: COLOR.avocado,
                borderRadius: SCALE(10000),
                elevation: 2,
              }}>
              <MaterialCommunityIcons
                name="format-letter-case"
                color={COLOR.white}
                size={SCALE(70)}
              />
            </Pressable>
            <Text
              style={{
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(16),
                paddingTop: SCALE(5),
                color: COLOR.black,
              }}>
              MENGENAL HURUF
            </Text>
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
              flexDirection: 'column',
            }}>
            <Pressable
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: SCALE(100),
                height: SCALE(100),
                backgroundColor: COLOR.yellow,
                borderRadius: SCALE(10000),
                elevation: 2,
              }}>
              <MaterialCommunityIcons
                name="gamepad"
                color={COLOR.white}
                size={SCALE(70)}
              />
            </Pressable>
            <Text
              style={{
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(16),
                paddingTop: SCALE(5),
                color: COLOR.black,
              }}>
              BERMAIN
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Pressable
              onPress={() => BackHandler.exitApp()}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: SCALE(100),
                height: SCALE(100),
                backgroundColor: COLOR.tomato,
                borderRadius: SCALE(10000),
                elevation: 2,
              }}>
              <MaterialCommunityIcons
                name="power"
                color={COLOR.white}
                size={SCALE(70)}
              />
            </Pressable>
            <Text
              style={{
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(16),
                paddingTop: SCALE(5),
                color: COLOR.black,
              }}>
              KELUAR
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const SkeletonImage = () => {
  return (
    <SkeletonPlaceholder>
      <View style={{height: HEIGHT, width: WIDTH}}>
        <View style={{flex: 0, width: WIDTH, height: forImage}} />
        <View style={{flex: 1, width: WIDTH, flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: SCALE(20),
              width: WIDTH / 2,
            }}>
            <View
              style={{
                width: SCALE(100),
                height: SCALE(100),
                borderRadius: SCALE(1000),
              }}
            />
            <View
              style={{
                width: SCALE(150),
                height: SCALE(25),
                borderRadius: SCALE(5),
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: SCALE(20),
              width: WIDTH / 2,
            }}>
            <View
              style={{
                width: SCALE(100),
                height: SCALE(100),
                borderRadius: SCALE(1000),
              }}
            />
            <View
              style={{
                width: SCALE(150),
                height: SCALE(25),
                borderRadius: SCALE(5),
              }}
            />
          </View>
        </View>
        <View style={{flex: 1, width: WIDTH, flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: SCALE(20),
              width: WIDTH / 2,
            }}>
            <View
              style={{
                width: SCALE(100),
                height: SCALE(100),
                borderRadius: SCALE(1000),
              }}
            />
            <View
              style={{
                width: SCALE(150),
                height: SCALE(25),
                borderRadius: SCALE(5),
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: SCALE(20),
              width: WIDTH / 2,
            }}>
            <View
              style={{
                width: SCALE(100),
                height: SCALE(100),
                borderRadius: SCALE(1000),
              }}
            />
            <View
              style={{
                width: SCALE(150),
                height: SCALE(25),
                borderRadius: SCALE(5),
              }}
            />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default Beranda = ({navigation}) => {
  const [loadBeranda, setLoadBeranda] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadBeranda(false);
    }, 1500);
  }, []);

  return loadBeranda ? (
    <SkeletonImage {...navigation} />
  ) : (
    <MainView {...navigation} />
  );
};
