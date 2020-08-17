import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import LinearGradient from 'react-native-linear-gradient';
import styles, { colors } from '../components/styles/index.style';

import LiveCases from '../components/home/AllOverview';
import Header from '../components/Header';
import CountrySelector from '../components/CountrySelector'; 


export class HomeScreen extends Component {

  get gradient () {
    return (
        <LinearGradient
          colors={[colors.background1, colors.background2]}
          startPoint={{ x: 1, y: 0 }}
          endPoint={{ x: 0, y: 1 }}
          style={styles.gradient}
        />
    );
}
    render() {
        return (
            <ScrollView style={stylesLocal.container}>
                 { this.gradient }
                <Header title='COVID TRACKER'/>

                <View style={stylesLocal.inner}>
                    <Text style={stylesLocal.title}><Icon name='flag' size={17}>&nbsp;</Icon>{"SELECT COUNTRY "}</Text>

                    <CountrySelector changeCountry={this.props.changeCountry} country={this.props.country} />

                    <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 10}}/>

                    <LiveCases country={this.props.country}/>
                </View>

            </ScrollView> 
        )
    }
}

const stylesLocal = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'rgb(255, 255, 255)',
  },
  
  inner: {
    marginHorizontal: 15,
    marginVertical: 8,
    // backgroundColor: 'rgb(255, 255, 255)',
  },

  title: {
    color: 'rgba(255, 171, 0,0.90)',
    // fontFamily: 'MontserratAlternates-Black',
    fontFamily: 'Avenir-Black',
    fontSize: 18,
    marginVertical: 5,
  
   
    }
});

export default HomeScreen
