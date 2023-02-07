import React, {useState} from 'react';
import {View, Text, SectionList} from 'react-native';
import ColorCounter from './ColorCounter';

const SquareScreen = () => {
  const Color_counter = 20;
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      default:
        return;
    }
  };
  return (
    <View style={{flex: 1}}>
      <ColorCounter
        onIncrease={() => setColor('red', Color_counter)}
        onDecrease={() => setColor('red', -1 * Color_counter)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('blue', Color_counter)}
        onDecrease={() => setColor('blue' - 1 * Color_counter)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor('green', Color_counter)}
        onDecrease={() => setColor('green' - 1 * Color_counter)}
        color="Green"
      />
      <View
        style={{
          flex: 0.5,
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
