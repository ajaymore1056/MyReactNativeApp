import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

class Buttontoggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   refresh: true,
      color: 'grey',
      title: 'On',
    };
    // this.color='grey';
    // this.title='On'
  }

  onPressItem() {
    // console.log('button clicked');
    // setcolor = this.state.color == 'grey' ? 'yellow':'grey';     //global variable store memory
    // settitle = this.state.title == 'On' ? 'OFF' : "On";
    this.setState({
      color: this.state.color == 'grey' ? 'yellow' : 'grey',
      title: this.state.title == 'On' ? 'OFF' : 'On',
    });
    // console.log(this.state.color)
    // console.log(this.state.title)
  }
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{height: 150, width: 120, backgroundColor: this.state.color}}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{padding:10, fontSize:15}}>Button: </Text>
          <Button
            style={styles.buttonsty}
            title={this.state.title}
            onPress={() => this.onPressItem()}
          />
        </View>
        <TouchableOpacity style={styles.buttonsty} onPress={() => this.onPressItem()}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableHighlight style={styles.buttonsty} onPress={() => this.onPressItem()}>
          <Text>TouchableHighlight</Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback >
          <Text>TouchableWithoutFeedback</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsty: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default Buttontoggle;
