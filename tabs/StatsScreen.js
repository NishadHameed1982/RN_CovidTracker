import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import LinearGradient from 'react-native-linear-gradient';
import styles, { colors } from '../components/styles/index.style';

import Header from '../components/Header';
import GlobalTable from '../components/stats/GlobalTable';
import CasesLine from '../components/stats/CasesLine';
import CasesPie from '../components/stats/CasesPie';
import CasesHeatMap from '../components/stats/CasesHeatMap'

import NetInfo from "@react-native-community/netinfo";
// import Snackbar from 'react-native-snackbar';

import AlertPassed from "react-native-alert-pro";

export class StatsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
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



// handleConnectivityChange = state => {

//   var prevStatus = this.state.connection_Status;
//   if (state.isConnected) {
//   //   Alert.alert('online');
//     this.setState({connection_Status: 'Online'});
   
//   } else {
//   //   Alert.alert('offline');
//     this.setState({connection_Status: 'Offline'});
//     // Snackbar.show({
//     //   text: 'NO NETWORK CONNECTION.\nPlease try again with proper internet connection',
//     //   duration: Snackbar.LENGTH_INDEFINITE,
//     //   backgroundColor: 'rgba(113, 88, 226,1.0)',
//     //   textColor: 'rgba(25, 25, 25,1.0)',
//     //   fontFamily: 'Avenir-Black',
//     //   action: {
//     //     text: 'CLOSE',
//     //     textColor: 'rgba(25, 25, 25,1.0)',
//     //     onPress: () => {  Snackbar.dismiss()  },
//     //   }

//     // });
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
    return (
      <ScrollView>
        { this.gradient }
        <Header title='COVID TRACKER'/>

        <ScrollView style={stylesLocal.container}>
          <Text style={stylesLocal.headline}><Icon name='bar-chart' size={19} /> STATISTICS: {this.props.country.toUpperCase()}</Text>

          <Text style={stylesLocal.title}>Total Confirmed: Last 15 Days</Text>
          <CasesLine country={this.props.country} />

          <Text style={stylesLocal.title}>Cases Heatmap Timeline</Text>
          <CasesHeatMap country={this.props.country}/>

          <Text style={stylesLocal.title}>Total Cases Ratio</Text>
          <CasesPie country={this.props.country} /> 
          <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 5}}/>

          <Text style={stylesLocal.headline}><Icon name='globe' size={19} /> STATISTICS: GLOBAL</Text>
          <Text style={stylesLocal.title}>Global Overview</Text>
          <GlobalTable /> 
          
        </ScrollView>

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
      </ScrollView>
    )
  }
}

const stylesLocal = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 8,
    // marginLeft: 0

  },

  headline: {
    color: 'rgba(255, 171, 0,0.90)',
    // fontWeight: 'bold'
    fontFamily: 'Avenir-Black',
    fontSize: 18,
    marginLeft:8
  },

  title: {
    color: 'rgba(255, 171, 0,0.90)',
    fontFamily: 'Avenir-Black',
    fontSize: 17,
    marginVertical: 8,
    // fontWeight: 'bold',
    marginLeft:8
  }
});

export default StatsScreen

