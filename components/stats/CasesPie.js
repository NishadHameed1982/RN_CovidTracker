import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { PieChart ,  BarChart} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width-20

export class CasesPie extends Component {
    constructor(props){
        super(props);
        this.CASE_NUMBERS = 15;
        this.state = {
            data: [],
            isLoading: true
        }
    }

    componentDidMount () {
        this._isMounted = true;
        fetch(`https://api.covid19api.com/total/country/${this.props.country}`)
            .then ((res) => res.json() )
            .then ((resJSON) => {
                confirmed = resJSON[resJSON.length-1]["Confirmed"] 
                active = resJSON[resJSON.length-1]["Confirmed"] - resJSON[resJSON.length-1]["Recovered"] - resJSON[resJSON.length-1]["Deaths"]
                recovered = resJSON[resJSON.length-1]["Recovered"]
                deaths = resJSON[resJSON.length-1]["Deaths"]
                
                data[0].population = Number((active*100/confirmed).toFixed(2))
                data[1].population = Number((recovered*100/confirmed).toFixed(2))
                data[2].population = Number((deaths*100/confirmed).toFixed(2))
                this.setState({data: data})
            })
            .then (res => this.setState({isLoading: false}))
            .catch((error => console.log('errorInMountingLiveCases', error)))
    }

    componentDidUpdate (pProps, pS, SS) {
        if(pProps.country !== this.props.country){
            this.componentDidMount();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
      }

      

    render() {
        if (this.state.isLoading) {
            return ( <View><ActivityIndicator size="large" color="#0000ff" style={styles.spinner}/></View> )
        }
        else {
            return (
                <ScrollView style={styles.container}>
                    {/* <PieChart
                        data={this.state.data}
                        width={Dimensions.get("window").width - 25} 
                        height={200}
                        chartConfig={chartConfig}
                        accessor="population"
                    /> */}
          <PieChart
  data={this.state.data}
  width={Dimensions.get("window").width-25}
  height={Dimensions.get("window").width*0.65}
    chartConfig={{
        color: (opacity = 1) => `black`,
        labelColor: (opacity = 1) => `black`,
        style: {
            // borderRadius: 16
        }
    }}
    backgroundColor="rgba(224, 224, 224,1.0)"
    accessor="population"
    paddingLeft="20"
    absolute
    style={{
        marginVertical: 0,
        borderRadius: 12
    }}
/>



                </ScrollView>
            )
        }
    }
}

var data = [
    {
    //   name: "Active",
    //   population: 32,
    //   color: "#336699",
    //   legendFontColor: "#001a33",
    //   legendFontSize: 14,
    //   decimalPlaces: 3, 
    //   absolute: true

    name: "% Active",
            population: 14.2,
            color: "rgba(255, 196, 0,0.75)",
            legendFontSize: 12,
            legendFontColor: 'rgba(33, 33, 33,1.0)',
          
   
      
    },
    {
    //   name: "Recovered",
    //   population: 33,
    //   color: "#00b386",
    //   legendFontColor: "#001a33",
    //   legendFontSize: 14,
    //   decimalPlaces: 3, 
    //   absolute: true

      name: "% Recovered",
      population: 12.4,
      color: "rgba(0, 230, 118,0.50)",
      legendFontSize: 12,
      legendFontColor: 'rgba(33, 33, 33,1.0)',
    
    },
    {
    //   name: "Deaths",
    //   population: 39,
    //   color: "#6e1703",
    //   legendFontColor: "#001a33",
    //   decimalPlaces: 3, 
    //   absolute: true

      name: "% Deaths",
      population: 39.2,
      color: "rgba(255, 23, 68,0.70)",
      legendFontSize: 12,
      legendFontColor: 'rgba(33, 33, 33,1.0)',
      
    },
];

const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ecf2f8",
    backgroundGradientTo: "#c7d9ea",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
    propsForDots: {
        r: "1",
        strokeWidth: "2",
        stroke: "#253a5c"
    }
    
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(255, 248, 225,1.0)',
      alignSelf: 'center',
      borderRadius: 12
    },
    spinner: {
        flex: 1,
        marginVertical:30,
        justifyContent: 'center',
        alignItems:'center'    
    }
});

export default CasesPie
