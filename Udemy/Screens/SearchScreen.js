import React,{useState} from "react";
import {View,Text, StyleSheet} from 'react-native';
import SearchBar from "../Component/SearchBar";

const SearchScreen=()=>{
    const [term ,newTerm] = useState('')
    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={newterm => newTerm(newterm)} 
            onTermSubmit={()=> console.log('term submited')}
            />
            <Text> SearchScreen </Text>
            <Text> {term} </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen;