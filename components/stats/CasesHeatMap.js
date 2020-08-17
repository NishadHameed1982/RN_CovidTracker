import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Text, Dimensions } from 'react-native';
import { ContributionGraph } from "react-native-chart-kit";
import Slider from '@react-native-community/slider';

const screenWidth = Dimensions.get("window").width-20
export class CasesHeatMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            endDate: new Date(),
            dateIndex: NUM_DAYS,
            isLoading: true
        }
    }

    componentDidMount () {
        fetch(`https://api.covid19api.com/total/country/${this.props.country}`)
            .then ((res) => res.json() )
            .then ((resJSON) => {
                var data = [];
                
                resJSON.forEach((element, index) => {
                    index == 0 ? 
                    data.push({ date: element["Date"], count: element["Confirmed"] }) 
                    : 
                    data.push({ date: resJSON[index]["Date"], count: resJSON[index]["Confirmed"] - resJSON[index - 1]["Confirmed"]})
                });

                this.setState({data: data})
                this.setState({dateIndex: data.length})
            })
            .then (res => this.setState({isLoading: false}))
            .catch((error => console.log('errorInMountingHeatMap', error)))
    }

    componentDidUpdate (pProps, pS, SS) {
        if(pProps.country !== this.props.country){
            this.componentDidMount();
        }
    }

    updateDateIndex = (value) => {
        var d = new Date();
        this.setState({dateIndex: value})
        d.setDate(d.getDate()- (this.state.data.length - value));
        this.setState({endDate: d})
    }

    render() {
        if (this.state.isLoading) {
            return ( <View><ActivityIndicator size="large" color="#0000ff" style={styles.spinner} /></View> )
        }
        else {
            return (
                <View style={styles.container}>
                    <Slider
                        style={{width: screenWidth , height: 30, alignSelf: 'center'}}
                        minimumValue={NUM_DAYS}
                        maximumValue={this.state.data.length - 1}
                        value={this.state.dateIndex}
                        onValueChange={value => this.updateDateIndex(value)}
                        step={1}
              
                    />

                   <ContributionGraph
                        values={this.state.data}
                        endDate={this.state.endDate}
                        squareSize={20}
                        numDays={NUM_DAYS}
                        width={screenWidth}
                        height={Dimensions.get("window").width*0.70}
                        chartConfig={chartConfig}
                        style={chartStyle}
                        alignSelf='center'
                    />
                </View>
            )
        }
    }
}

const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ecf2f8",
    backgroundGradientTo: "#c7d9ea",
    color: (opacity = 0) => `rgba(0, 51, 102, ${opacity})`,
    labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
}

const chartStyle = {
    borderRadius: 12,
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#eee',
      alignSelf: 'center',
      borderRadius: 12,

      
    },
    spinner: {
        flex: 1,
        marginVertical:30,
        justifyContent: 'center',
        alignItems:'center'    
    }
});

const NUM_DAYS = 105

export default CasesHeatMap;
