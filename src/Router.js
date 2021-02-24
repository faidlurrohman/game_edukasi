import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';

import Beranda from './screens/Beranda';
import Angka from './screens/Angka';
import Huruf from './screens/Huruf';
import {COLOR, SCALE} from './assets/css/styles';

const DashboardStack = createStackNavigator();

const MainScreen = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Beranda"
        component={Beranda}
        options={{
          headerShown: false,
        }}
      />
      <DashboardStack.Screen
        name="Angka"
        component={Angka}
        options={({navigation, route}) => ({
          title: 'MENGENAL ANGKA',
          headerTitleStyle: {
            fontFamily: 'PaytoneOne',
            fontSize: SCALE(18),
            color: COLOR.white,
          },
          headerStyle: {
            backgroundColor: COLOR.aqua,
          },
          headerLeft: () => (
            <Pressable
              style={{paddingHorizontal: SCALE(18)}}
              onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="arrow-left-bold"
                color={COLOR.white}
                size={SCALE(26)}
              />
            </Pressable>
          ),
        })}
      />
      <DashboardStack.Screen
        name="Huruf"
        component={Huruf}
        options={({navigation, route}) => ({
          title: 'MENGENAL HURUF',
          headerTitleStyle: {
            fontFamily: 'PaytoneOne',
            fontSize: SCALE(18),
            color: COLOR.white,
          },
          headerStyle: {
            backgroundColor: COLOR.aqua,
          },
          headerLeft: () => (
            <Pressable
              style={{paddingHorizontal: SCALE(18)}}
              onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="arrow-left-bold"
                color={COLOR.white}
                size={SCALE(26)}
              />
            </Pressable>
          ),
        })}
      />
    </DashboardStack.Navigator>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <ActivityIndicator
      style={{flex: 1, justifyContent: 'center'}}
      animating={true}
      color={COLOR.avocado}
      size={40}
    />
  ) : (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
};

export default App;
