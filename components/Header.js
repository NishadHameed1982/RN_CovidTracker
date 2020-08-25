import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const Header = ({title},{subText}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
  <Text style={styles.subText}>Latest COVID-19 Information</Text>
      {/* <Text style={styles.subText}>{this.props.country.toString().toUpperCase()}</Text> */}

      
 
      
    </View>
  );
};

Header.defaultProps = {
    title: 'COVID TRACKER',
    subText: 'Latest COVID-19 Information'
}


const styles = StyleSheet.create({
  header: {
    height: 140,
    paddingTop:60,
    padding: 15,
    // backgroundColor: 'rgb(255, 196, 0)',
  },
  text: {
    color: 'rgba(255, 196, 0,1.0)',
    fontSize: 32,
    fontFamily: 'MontserratAlternates-Black',
    textAlign: 'center'

  },
  subText: {
    color: 'rgba(255, 196, 0,0.75)',
    fontSize: 16,
    fontFamily: 'MontserratAlternates-Bold',
    textAlign: 'center'
  }
});

export default Header;



