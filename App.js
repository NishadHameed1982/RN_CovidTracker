import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationContainer,  StackActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Snackbar from 'react-native-snackbar';

import StatsScreen from './tabs/StatsScreen';
import HomeScreen from './tabs/HomeScreen';
import AdviceScreen from './tabs/AdviceScreen' ;





import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import AdviceStack from './tabs/RootNavigator';

export class App extends Component {

  
  constructor(props){
    super(props);
    this.state = {
      country: 'united-states',
    }
  }


  componentDidMount () {
    this.setState({country: 'united-states'})
  }

  changeCountry = (value) => {
    var oldCountry = this.state.country;
    var selectedCountry = value;
    this.setState({ country: value })
    Snackbar.show({
      // text: 'COUNTRY UPDATED!',
      text: selectedCountry.toUpperCase() + ' HAS BEEN SELECTED!' ,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'rgba(251, 192, 45,0.80)',
      textColor: 'rgba(66, 66, 66,1.0)',
      // fontFamily: 'Avenir-Black',

      // action: {
      //   text: 'UNDO',
      //   textColor: 'rgba(66, 66, 66,1.0)',
      //   onPress: () => { this.changeCountry(oldCountry) },
      // }



  //  action: {
  //       text: 'updated!!',
  //       textColor: 'rgba(66, 66, 66,1.0)',
  //       onPress: () => {  },
  //     }

    });
  }

  

  render() {
    const Tab = createMaterialBottomTabNavigator();
    return (
      <NavigationContainer style={styles.container}>
        
         <Tab.Navigator  barStyle={{ backgroundColor: 'rgb(255, 196, 0)' }}>

         <Tab.Screen name="Symptoms" children={() => <AdviceScreen country={this.state.country} />} test={"test"} options={{
              tabBarLabel: 'Symptoms',
              tabBarIcon: ({ color }) => (
                <Icon name='heartbeat' color={color} size={25}></Icon>
              ),
            }}/>

            <Tab.Screen name="Countries" children={() => <HomeScreen changeCountry={this.changeCountry} country={this.state.country} />} options={{
              tabBarLabel: 'Countries',
              tabBarIcon: ({ color }) => (
                <Icon name='search-plus' color={color} size={25}></Icon>
              ),
            }}/>

          <Tab.Screen name="Statistics" children={() => <StatsScreen country={this.state.country} />} test={"test"} options={{
              tabBarLabel: 'Statistics',
              tabBarIcon: ({ color }) => (
                <Icon name='bar-chart' color={color} size={25}></Icon>
              ),
            }}/>

          </Tab.Navigator>
      </NavigationContainer>
    )
  }
}


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 196, 0)',
    justifyContent: 'center',

  },
});

export default App;
