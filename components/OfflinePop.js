import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, ImageBackground} from 'react-native';

// import styles from '../components/assets/styles/index'
// import Wifi_Icon from '../components/assets/icons/wifi.svg';
import NetInfo from '@react-native-community/netinfo'
// import img1 from '../components/assets/15.png'
// import {img2} from '../components/assets/Findr_logo2x.png'


// function MiniOfflineSign() {
//     return (
//       <ImageBackground source={require('../components/assets/15.png')} style={styles.internetBG}>
//         <View style={{flexDirection: 'column', alignItems: 'center', padding: 20}}>
//           <Image style={styles.internetLogo} source={require('../components/assets/Findr_logo2x.png')} />
//           <View style={{marginTop: Dimensions.get('window').height * 0.03, padding: 20, flexDirection: 'column', alignItems: 'center'}}>
//             <Wifi_Icon width={40} height={40}/>
//             <Text style={styles.internetText}>Oops! Lost connection</Text>
//           </View>
//         </View>
//       </ImageBackground>
// );
//   }
  
  class OfflineNotice extends PureComponent {
    state = {
      isConnected: false,
      unsubscribeNetwork: null,
    };
  
    componentDidMount() {
      this.setState({ 
          unsubscribeNetwork: NetInfo.addEventListener( state => {
          this.setState({isConnected: state.isConnected})
        }
      )});
    }
  
    componentWillUnmount() {
      this.state.unsubscribeNetwork()
    }

    render() {
      if (this.state.isConnected) {
        this.props.navigation.goBack();
      }
      // return null;
        return <MiniOfflineSign />;
  }


  
}

export default OfflineNotice;