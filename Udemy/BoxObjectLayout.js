import React,{Component} from "react";
import {Text, View, StyleSheet} from 'react-native';

const BoxObjectLayout=() => {
    return(
        <View style={styles.mainView}>
            <View style={styles.firstView}/>
            <View style={styles.thirdView}/>
            <View style={styles.secondView}/>
         </View>
    );
}

const styles =  StyleSheet.create({
    mainView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    firstView:{
            backgroundColor:'orange',
            borderWidth:1,
            height:90,
            width:90
    },
    secondView:{
        backgroundColor:'blue',
        borderWidth:1,
        height:90,
        width:90
    },
    thirdView:{
        backgroundColor:'green',
        borderWidth:1,
        height:90,
        width:90,
        marginTop:90
    },
})
export default BoxObjectLayout;