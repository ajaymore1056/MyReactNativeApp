import React, {Component} from 'react'; // import react components
import {Button, Text, View} from 'react-native'; // import react native components

class ChatScreen extends Component {
  render() {
    const {userName, message} = this.props.route.params || {}; // destructure params here
    // console.info("userName",userName);     // we are checking on console what value will be print
    // console.info("message",message);
    return (
      <View style={{marginTop: 30, marginStart: 20, alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
        <Text>{message||"message"} {userName|| "username"}</Text>
          <Text>
            <Button
              title="back to Homescreen"
              onPress={() => this.props.navigation.navigate('MainScreen')}
            />
          </Text>
        
      </View>
    );
  }
}

export default ChatScreen;

// manually i have created header part

{
  /* <View
          style={{
            paddingTop: 50,
            backgroundColor: '#374649',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{marginHorizontal:10}}>
          <Button
            title="< Back"
            onPress={() => this.props.navigation.navigate(HomeScreen)}
          />
          </View>
          <View style={{ marginHorizontal:70}}>
            <Text style={{color:'orange',fontWeight: 'bold', fontSize: 20}}>{userName}</Text>
          </View>
        </View> 
  */
}
