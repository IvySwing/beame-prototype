import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logo from './assets/images/logo.jpg';
import LinkedIn_Button from './assets/images/LinkedIn_Button.png';
import Email_Button from './assets/images/Email_Button.png';

import CIOCardScreen from './screens/CIOCard';
import DashboardScreen from './screens/Dashboard';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#401B4F', '#191838', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 230,
        }}
      />
      <Image source={logo} style={styles.logo} />
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.text}> SIGN UP/IN </Text>
        </TouchableOpacity>
        <Image source={LinkedIn_Button} style={styles.button} />
        <Image source={Email_Button} style={styles.button} />
      </ScrollView>
      <Text style={styles.text}>Sneek a Peek</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={DashboardScreen} />
        <Stack.Screen options={{ headerShown: false }} name="CIOCard" component={CIOCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191838',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#D5D4DB',
    fontSize: 11,
    textAlign: "center",
    marginTop: 50,
    paddingBottom: 15,
  },

  logo: {
    width: 305,
    height: 109,
    marginTop: 100,
  },

  button: {
    width: 75,
    height: 75,
    margin: 5,
  },

});

export default App;
