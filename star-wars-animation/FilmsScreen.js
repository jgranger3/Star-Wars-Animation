import React, {useEffect, useState} from 'react';
import { Text, 
SafeAreaView, 
FlatList, 
Button, 
ScrollView, 
Switch,
StyleSheet, 
ActivityIndicator, 
TextInput,
TouchableOpacity
} from 'react-native';
import Animated, { SlideInLeft, SlideOutRight } from
  "react-native-reanimated";
import axios from 'axios';



export default function FilmsScreen() {
  
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://www.swapi.tech/api/films');
        setFilms(response.data.result);
      } catch (error){
        console.error('Error fetching films data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);
  
  if (loading) {
    return (
      <SafeAreaView style={style.center}>
        <ActivityIndicator size='large' color='#0000ff' />
        <Text>Loading Films...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={style.container}>
    <ScrollView>
      <Text style={style.header}>Star Wars Films:</Text>
      <FlatList
        data={films}
        keyExtractor={(item) => item.properties.title}
        renderItem={({ item}) =>(
          <SafeAreaView style={style.item}>
            <Text style={style.name}>{item.properties.title}</Text>
          </SafeAreaView>
        )}
      />

      <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
        <TextInput
          placeholder="Search"
          style={style.searchBox}
        />
      </SafeAreaView>
      <Animated.View entering={SlideInLeft}
        exiting={SlideOutRight}>
        <TouchableOpacity onPress={() => onPress(id)}
        style={style.item}>
          <Text>{name}</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>  
    </SafeAreaView>
  );
}
  



const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: 5,
    padding: 5,
    textAlign: 'center',
    color: 'black',
  },
  name:{
    margin: 5,
    padding: 5,
    textAlign: 'center',
    fontSize: 24,
    
  },
  header: {
    margin: 5,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    

  },
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
});