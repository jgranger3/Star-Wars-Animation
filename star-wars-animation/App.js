import * as React from 'react';
import {
  Text,
  SafeAreaView,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlanetsScreen from './PlanetsScreen';
import FilmsScreen from './FilmsScreen';
import SpaceshipsScreen from './SpaceshipsScreen';

const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text> Welcome to the Star Wars Universe!!!! </Text>
    <Button title="Planets" onPress={() => navigation.navigate('Planets')} />
    <Button title="Films" onPress={() => navigation.navigate('Films')} />
    <Button
      title="Spaceships"
      onPress={() => navigation.navigate('Spaceships')}
    />
  </SafeAreaView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Planets" component={PlanetsScreen} />
        <Stack.Screen name="Films" component={FilmsScreen} />
        <Stack.Screen name="Spaceships" component={SpaceshipsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;