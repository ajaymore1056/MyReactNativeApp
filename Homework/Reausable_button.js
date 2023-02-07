import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Button_Detail from './button_Detail';

class Reausable_button extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Button_Detail
          title="Small button"
          styleicon={styles.smallButton}
          svgicon={true}
          styleIcon={styles.icon}
        />
        <Button_Detail title="Medium button" styleicon={styles.MediumButton} />
        <Button_Detail title="Large button" styleicon={styles.largeButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    flex: 1,
    backgroundColor: 'grey',
    // alignItems:'center'
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
  },
  MediumButton: {
    alignItems: 'center',
    backgroundColor: '#ff00ff',
    padding: 10,
    // width:'50%',
    // flex:1,
    marginVertical: 10,
    marginHorizontal: 80,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'green',
  },
  smallButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#00ff30',
    padding: 10,
    marginHorizontal: 100,
    // width:'30%',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'green',
  },

  largeButton: {
    alignItems: 'center',
    backgroundColor: '#ffff30',
    padding: 10,
    marginHorizontal: 10,
    // width:'90%',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'green',
  },
});

export default Reausable_button;
