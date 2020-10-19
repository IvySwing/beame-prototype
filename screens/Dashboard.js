/* import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function DashboardScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => navigation.navigate('CIOCard')}
            >
            <Text style={styles.text}> This is the dashboard</Text>
            </TouchableOpacity>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191838',
      alignItems: 'center',
      justifyContent: 'center',
    }});
    
    export default DashboardScreen;  */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SlidingPanel from 'react-native-sliding-panels';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SlidingPanel
          headerLayoutHeight={100}
          headerLayoutWidth={800}
          headerLayout={() =>
            <View style={styles.headerLayoutStyle}>
              <Text style={styles.commonTextStyle}>My Awesome sliding panel</Text>
            </View>
          }
          panelPosition="right"
          slidingPanelLayout={() =>
            <View style={styles.slidingPanelLayoutStyle}>
              <Text style={styles.commonTextStyle}>The best thing about me is you</Text>
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLayoutStyle: {
    width,
    height: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slidingPanelLayoutStyle: {
    width,
    height,
    backgroundColor: '#7E52A0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonTextStyle: {
    color: 'white',
    fontSize: 18,
  },
});