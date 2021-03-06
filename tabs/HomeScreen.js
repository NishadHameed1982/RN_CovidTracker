import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import LinearGradient from 'react-native-linear-gradient';
import styles, { colors } from '../components/styles/index.style';

import LiveCases from '../components/home/AllOverview';
import Header from '../components/Header';
import CountrySelector from '../components/CountrySelector'; 
import NewCountrySelector from '../components/NewCountrySelector'; 

import NetInfo from "@react-native-community/netinfo";
import Snackbar from 'react-native-snackbar';
import OfflinePop from '../components/OfflinePop'

import AlertPassed from "react-native-alert-pro";



export class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //  connection_Status: true,
      isConnected: true,
      unsubscribeNetwork: null,
    }
}


componentDidMount() {

  this.setState({ 
    unsubscribeNetwork: NetInfo.addEventListener( state => {
    this.setState({isConnected: state.isConnected})

    if (!this.state.isConnected) {

    this.AlertPassed.open()

  }
  }
)});
}

componentWillUnmount(){
  this.state.unsubscribeNetwork()
  
 
}

// oflinePopup(){
  
// }

// componentDidMount () {
//   NetInfo.addEventListener(this.handleConnectivityChange);

//       this.setState({ connection_Status: "Online" })
    
    
// }

// componentWillUnmount() {
//   NetInfo.removeEventListener(this.handleConnectivityChange);
// }

// handleConnectivityChange = state => {

//   if (state.isConnected) {
//   //   Alert.alert('online');
//     this.setState({connection_Status: 'Online'});
   
//   } else {
//   //   Alert.alert('offline');
//     this.setState({connection_Status: 'Offline'});
//     Snackbar.show({
//       text: 'NO NETWORK CONNECTION.\nPlease try again with proper internet connection',
//       duration: Snackbar.LENGTH_INDEFINITE,
//       backgroundColor: 'rgba(113, 88, 226,1.0)',
//       textColor: 'rgba(25, 25, 25,1.0)',
//       fontFamily: 'Avenir-Black',
//       action: {
//         text: 'CLOSE',
//         textColor: 'rgba(25, 25, 25,1.0)',
//         onPress: () => { this.HomeScreen},
//       }

//     });
//   }
// };


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
      // if (!this.state.isConnected) {
      //   // this.props.navigation.navigate('OfflinePop');
      //   // Alert.alert("Popup");
      //   // this.AlertPassed.open()
      // }
        return (
            <ScrollView style={stylesLocal.container}>
                 { this.gradient }
                <Header title='COVID TRACKER'/>

                <View style={stylesLocal.inner}>
                    <Text style={stylesLocal.title}><Icon name='flag' size={17}>&nbsp;</Icon>{"SELECT COUNTRY "}</Text>

                    {/* <CountrySelector changeCountry={this.props.changeCountry} country={this.props.country} /> */}
                    <NewCountrySelector changeCountry={this.props.changeCountry} country={this.props.country} />

                    <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 10}}/>

                    <LiveCases country={this.props.country}/>



                    <AlertPassed
              ref={ref => {
                this.AlertPassed = ref;
              }}
              onConfirm={() => this.AlertPassed.close()}
            // onCancel={()=> navigation.navigate("Home")}
            showCancel = {false}
            closeOnPressMask = {false}
    
    
              // title="Well Done, That's the correct answer. Your score is"
              title= {"Oops, Something Went Wrong!\n\nNetwork Error"}
              message= {"Please connect to the internet and restart your app for accurate results."}
              
              textConfirm = "Close"
              textCancel = "Reset"
              customStyles={{
                title:{
                  fontSize: 18,
                  fontFamily:'MontserratAlternates-Bold',
                  paddingTop: 2,
                  textAlign: 'center',
                  color:'rgba(3, 4, 94,1.0)',
                },
                message:{
                  fontSize: 18,
                  fontFamily: 'MontserratAlternates-SemiBold',
                  paddingBottom: 2,
                  textAlign: 'center',
                  color:'rgba(3, 4, 94,1.0)',
                },
                textCancel:{
                  fontSize: 18,
                fontFamily: 'MontserratAlternates-Black',
                  textAlign: 'center',
                  color:'rgba(255, 255, 255,1.0)',
                  paddingLeft: 16,
                  paddingRight: 16,
                },
                textConfirm:{
                  fontSize: 18,
                  fontFamily: 'MontserratAlternates-Black' ,
                  textAlign: 'center',
                  color:'rgba(255, 255, 255,1.0)',
                  paddingLeft: 16,
                  paddingRight: 16,
                },
                mask: {
                  backgroundColor: "transparent"
                },
                container: {
                  borderWidth: 0,
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  backgroundColor:'rgba(255, 224, 130,1.0)',
                  borderRadius: 8,
                },
                buttonCancel: {
                  backgroundColor: 'rgba(0, 176, 255,1.0)',
                  borderRadius: 24,
                },
                buttonConfirm: {
                  backgroundColor: 'rgba(0, 176, 255,1.0)',
                  borderRadius: 24,
                }
              }}
            />
                </View>

            </ScrollView> 
        )
    }
}

const stylesLocal = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'rgb(255, 255, 255)',
    // marginVertical: 8,
    // marginHorizontal: 8,
  },
  
  inner: {
    marginHorizontal: 15,
    marginVertical: 10,
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
