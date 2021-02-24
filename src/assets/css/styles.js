import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const COLOR = {
  avocado: '#258039',
  yellow: '#F5BE41',
  aqua: '#3568C4',
  tomato: '#CF3721',
  grey: '#5D5D5D',
  transparent: 'rgba(0,0,0,0)',
  white: '#f7f5f0',
  whiteOpacity: 'rgba(247, 245, 240,.6)',
  blackOpacity: 'rgba(0,0,0,.1)',
  black: 'rgba(0,0,0,10)',
  indonesia: ['#ff0000', '#ffffff'],
};

const SCALE = (_number) => {
  return parseInt(_number + HEIGHT / WIDTH);
};

export {WIDTH, HEIGHT, COLOR, SCALE};
