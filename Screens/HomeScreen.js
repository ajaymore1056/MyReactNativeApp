import React, { Component } from "react"; // import react components
import {
  FlatList,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from "react-native"; // import react native components

const dummyData = [
  {
    id: "1",
    userName: "Ajay More",
    time: "12:10 pm",
    message: "hii.",
    num: "2"
  },
  {
    id: "2",
    userName: "Arish Panjwani",
    time: "1:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "3",
    userName: "Nilesh Joge",
    time: "2:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "4",
    userName: "Faizan Qureshi",
    time: "3:50 pm",
    message: "Hiii",
    num: "3"
  },
  {
    id: "5",
    userName: "Malik Khoja",
    time: "4:50 pm",
    message: "Hello",
    num: "1"
  },
  {
    id: "6",
    userName: "Santosh Raut",
    time: "12:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "7",
    userName: "Arish Panjwani",
    time: "1:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "8",
    userName: "Nilesh Joge",
    time: "2:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "9",
    userName: "Faizan Qureshi",
    time: "3:50 pm",
    message: "Hello World",
    num: "14"
  },
  {
    id: "10",
    userName: "Atul Sharma",
    time: "4:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "11",
    userName: "Ajay More",
    time: "12:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "12",
    userName: "Arish Panjwani",
    time: "1:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "13",
    userName: "Nilesh Joge",
    time: "2:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "14",
    userName: "Faizan Qureshi",
    time: "3:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "15",
    userName: "Atul Sharma",
    time: "4:50 pm",
    message: "Hello World",
    num: "1"
  }
];

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: true // state initialize true
    };
    this.isDarkTheme = false;
    this.theme = {
      // class variable with object
      light: {
        itemBackgroundColor: "#FFFFFF",
        headerBackgroundColor: "teal",
        userNameColor: "#000",
        circleColor: "#33AE81",
        timeColor: "#33AE81",
        headTextColor: "#FFFFFF",
        darkTheme: "#FFFFFF"
      },
      dark: {
        itemBackgroundColor: "#636543",
        headerBackgroundColor: "#374649",
        userNameColor: "#FFF",
        circleColor: "#6DB6FF",
        timeColor: "#6DB6FF",
        headTextColor: "#998F85",
        darkTheme: "#998F85"
      }
    };
    this.colorList = this.theme.light; // class variable
  }
  onPressItem = (item, index) => {
    console.info("itemInfo", item); // we print all info of item from object on console
    dummyData[index].num == 0
      ? (dummyData[index].num = 1)
      : (dummyData[index].num = 0); // num value change using index
    // this.props.navigation.navigate('ChatScreen', {
    //   userName: item.userName, // we pass the value
    //   message: item.message,
    // }); // we pass only username from item
    this.refresh();
    //dummyData.splice(index,1);  // row delete permenent
  };

  refresh = () => {
    this.setState({ refresh: !this.state.refresh });
  };

  onThemeChange = () => {
    console.log("inside onthemeChange function");
    this.isDarkTheme = !this.isDarkTheme; // set the value false
    this.colorList = this.isDarkTheme ? this.theme.dark : this.theme.light; // condition check
    this.refresh();
  };
  headerPart() {
    const {
      itemBackgroundColor,
      headerBackgroundColor,
      headTextColor,
      darkTheme
    } = this.colorList;
    return (
      <View>
        <View
          style={[
            styles.headerPart1,
            { backgroundColor: headerBackgroundColor }
          ]}
        >
          {/* 1 child view */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 10
            }}
          >
            <Text style={{ fontSize: 20, color: headTextColor }}>WhatsApp</Text>

            {/* Under 1 child view*/}
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                marginRight: 5
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: headTextColor,
                    marginRight: 20
                  }}
                >
                  DarkTheme
                </Text>
                <Switch
                  // disabled  // Disables the switch
                  value={this.isDarkTheme}
                  thumbColor={"#FFF"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => {
                    this.onThemeChange();
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  // function created for first info row
  renderItem = ({ item, index }) => {
    // passing the index as props for flatlist
    const { id, userName, time, message, num } = item; // Destructuring array created for flatlist
    const {
      itemBackgroundColor,
      userNameColor,
      circleColor,
      timeColor,
      headTextColor
    } = this.colorList;
    return (
      <TouchableOpacity
        // key={String(index)}
        onPress={() => this.onPressItem(item, index)}
      >
        <View
          style={[styles.mainView, { backgroundColor: itemBackgroundColor }]}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                source={require("./profileIcon.png")} // display the image using path
                style={styles.circle}
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text
                style={[
                  styles.userName,
                  num > 0 ? styles.fontBold : undefined,
                  { color: userNameColor }
                ]}
              >
                {userName}
              </Text>
              <Text style={{ marginTop: 5 }}>
                {message}
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={[
                num > 0 ? styles.fontBold : undefined,
                num > 0 ? { color: timeColor } : { color: "#000000" }
              ]}
            >
              {time}
            </Text>
            {num > 0 &&
              <View style={[styles.circle2, { backgroundColor: circleColor }]}>
                <Text style={styles.num1}>
                  {num}
                </Text>
              </View>}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View>
        {this.headerPart()}
        <FlatList
          data={dummyData} // store the data required
          renderItem={item => this.renderItem(item)} //Passing the data required
          keyExtractor={item => item.id} // created unique id for the specified index and return the reordering by key
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // using we create reference object of styling
  headerPart1: { paddingTop: 40, backgroundColor: "teal" },
  mainView: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "grey",
    justifyContent: "space-between"
  },
  circle: {
    width: 45,
    height: 45
  },

  userName: {
    fontSize: 20
  },

  fontBold: {
    fontWeight: "bold"
  },

  circle2: {
    width: 20,
    height: 20,
    borderRadius: 180 / 2,
    backgroundColor: "skyblue",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  num1: {
    fontSize: 12,
    alignSelf: "center"
  },

  item: {
    fontWeight: "normal"
  },
  themeName1: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  switchStyle: {
    width: 20,
    height: 20
  }
});

export default HomeScreen;
