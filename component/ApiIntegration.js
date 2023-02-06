import { id } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

const ApiIntegration = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async ()=> {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setData(json);
    }
    catch (error){
        console.error(error);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(()=>{
    getMovies();
    // fetch("https://fakestoreapi.com/products")
    //   .then((resp) => resp.json())
    //   .then((json)=>setData(json))
    //   .then((error) => console.error(error))
    //   .finally(()=>setLoading(false))
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "grey"}}>
      {isLoading ? (
        <ActivityIndicator  color={"red"} style={{flex:1, alignSelf:"center"}}/>
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={({ id }) => id}
          
          renderItem={({ item}) => (
            <View style={[styles.viewflatlist]}>
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewflatlist:{
    width: "45%", 
    marginVertical: 10 , 
    marginHorizontal:10,
    borderWidth:2,
    borderColor:"black",
    padding:5,
    borderRadius:10
  }
})
export default ApiIntegration;