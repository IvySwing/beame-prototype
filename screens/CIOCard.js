import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import goalbar from '../assets/images/goalbar.png';
import footer from '../assets/images/Footer.png';
import gradCap from '../assets/images/graduation_cap.png';
import pinkBubble from '../assets/images/pink_bubble.png';
import pinkerBubble from '../assets/images/pinker_bubble.png';
import whiteBubble from '../assets/images/white_bubble.png';
import purpleBubble from '../assets/images/purple_bubble.png';
import smallPurple from '../assets/images/small_purple bubble.png';

function CIOCardScreen({ navigation }) {
    return(
        <View style={styles.container}>
          <Image source={goalbar} style={{width: 1400, height: 150}} />
          <ScrollView>
            <View>
              <Image source={gradCap} style={styles.gradCap}/>
              <Image source={pinkBubble} style={styles.bubble}/>
            </View>
            <View>
              <Image source={gradCap} style={styles.gradCap}/>
              <Image source={pinkerBubble} style={styles.bubble}/>
            </View>
            <View>
              <Image source={gradCap} style={styles.gradCap}/>
              <Image source={whiteBubble} style={styles.bubble}/>
            </View>
            <View>
              <Image source={gradCap} style={styles.gradCap}/>
            </View>
            <View>
              <Image source={purpleBubble} style={styles.bubble}/>
              <Image source={gradCap} style={styles.gradCap}/>
            </View>
            <View>
              <Image source={smallPurple} style={styles.bubble}/>
              <Image source={gradCap} style={styles.gradCap}/>
            </View>           
          </ScrollView>
          <Image source={footer} style={{width: 1400, height: 150}} />
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191838',
      alignItems: 'center',
    },

    gradCap: {
      width: 35,
      height: 35,
    },

    bubble: {
      width: 105,
      height: 105,
    },
  
  });
    
    export default CIOCardScreen;