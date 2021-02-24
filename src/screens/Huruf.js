import React, {useEffect, useState} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {WIDTH, HEIGHT, SCALE, COLOR} from '../assets/css/styles';
import {IMAGES} from '../assets/images/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const forImage = HEIGHT / 2.4;

export default Huruf = () => {
  const [imageData, setImageData] = useState([]);
  const [imageCounter, setImageCounter] = useState(0);

  useEffect(() => {
    setImageData(IMAGES);
    return () => {
      setImageData([]);
      setImageCounter(0);
    };
  }, []);

  const updateCounter = (_current_count) => {
    setImageCounter(_current_count + 1);
    MainView(imageCounter);
  };
  const decreaseCounter = (_current_count) => {
    setImageCounter(_current_count - 1);
    MainView(imageCounter);
  };

  const MainView = () => {
    const findData = imageData.filter((items, index) => {
      if (index === imageCounter) return items;
    });
    return findData.map((values, index) => {
      return (
        <View style={{flex: 1, height: HEIGHT, width: WIDTH}} key={index}>
          <View
            style={{
              flex: 0,
              padding: SCALE(10),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'PaytoneOne',
                fontSize: SCALE(150),
                color: COLOR.black,
              }}>
              {values.initial}
            </Text>
          </View>
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                backgroundColor: COLOR.aqua,
                paddingVertical: SCALE(5),
                width: SCALE(120),
                alignItems: 'center',
                borderRadius: SCALE(4),
              }}>
              <Text
                style={{
                  fontFamily: 'PaytoneOne',
                  fontSize: SCALE(18),
                  color: COLOR.white,
                }}>
                {values.eng.toUpperCase()}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: COLOR.aqua,
                paddingVertical: SCALE(5),
                width: SCALE(120),
                alignItems: 'center',
                borderRadius: SCALE(4),
              }}>
              <Text
                style={{
                  fontFamily: 'PaytoneOne',
                  fontSize: SCALE(18),
                  color: COLOR.white,
                }}>
                {values.ind.toUpperCase()}
              </Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Image
              style={{width: WIDTH, height: forImage}}
              source={values.url}
              resizeMode="center"
            />
          </View>
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 0,
                justifyContent: 'center',
                paddingVertical: SCALE(20),
                alignItems: 'flex-end',
              }}>
              <Pressable
                disabled={imageCounter === 0 ? true : false}
                style={{paddingHorizontal: SCALE(18)}}
                onPress={() => decreaseCounter(imageCounter)}>
                <MaterialCommunityIcons
                  name="arrow-left-bold"
                  color={imageCounter === 0 ? COLOR.grey : COLOR.aqua}
                  size={SCALE(26)}
                />
              </Pressable>
            </View>
            <View
              style={{
                flex: 0,
                justifyContent: 'center',
                paddingVertical: SCALE(20),
                alignItems: 'flex-end',
              }}>
              <Pressable
                disabled={imageCounter === 5 ? true : false}
                style={{paddingHorizontal: SCALE(18)}}
                onPress={() => updateCounter(imageCounter)}>
                <MaterialCommunityIcons
                  name="arrow-right-bold"
                  color={imageCounter === 5 ? COLOR.grey : COLOR.aqua}
                  size={SCALE(26)}
                />
              </Pressable>
            </View>
          </View>
        </View>
      );
    });
  };

  return <MainView />;
};
