import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
import CIOCardScreen from './CIOCard';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <Text style={{ color: 'white' }}>Close</Text>
        <CIOCardScreen />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer
          open={this.state.open}
          position='right'
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <Button
            onPress={this.toggleOpen}
            title="Chief Information Officer"
            color='#150A3E'
            style={styles.body}>
          </Button>
          <Button
            onPress={this.toggleOpen}
            title="Another Tech Position"
            color='150A3E'
            style={styles.body}>
          </Button>
        </MenuDrawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#150A3E',
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0
  },
  animatedBox: {
    flex: 1,
    backgroundColor: '#191838',
    padding: 10
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Dashboard;

/*import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function DashboardScreen({ navigation }) {
  return (
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
  }
});

export default DashboardScreen;*/
