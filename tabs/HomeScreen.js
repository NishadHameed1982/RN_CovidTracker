import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import LinearGradient from 'react-native-linear-gradient';
import styles, { colors } from '../components/styles/index.style';

import LiveCases from '../components/home/AllOverview';
import Header from '../components/Header';
import CountrySelector from '../components/CountrySelector'; 

import NetInfo from "@react-native-community/netinfo";
import Snackbar from 'react-native-snackbar';


export class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
       connection_Status: true,
    }
}

componentDidMount () {
  NetInfo.addEventListener(this.handleConnectivityChange);

      this.setState({ connection_Status: "Online" })
    
    
}

componentWillUnmount() {
  NetInfo.removeEventListener(this.handleConnectivityChange);
}

handleConnectivityChange = state => {

  var prevStatus = this.state.connection_Status;
  if (state.isConnected) {
  //   Alert.alert('online');
    this.setState({connection_Status: 'Online'});
   
  } else {
  //   Alert.alert('offline');
    this.setState({connection_Status: 'Offline'});
    Snackbar.show({
      text: 'NO NETWORK CONNECTION.\nPlease try again with proper internet connection',
      duration: Snackbar.LENGTH_INDEFINITE,
      backgroundColor: 'rgba(235, 47, 6,0.80)',
      textColor: 'rgba(66, 66, 66,1.0)',
      fontFamily: 'Avenir-Black',
      action: {
        text: 'CLOSE',
        textColor: 'rgba(66, 66, 66,1.0)',
        onPress: () => {  },
      }
      // action: {
      //     text: 'RECHECK',
      //     textColor: 'green',
      //     onPress: () => { this.handleConnectivityChange},
      //   },

    });
  }
};


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
