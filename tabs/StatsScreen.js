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

export class StatsScreen extends Component {

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

