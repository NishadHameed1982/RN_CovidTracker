import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export class CountrySelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            countries: [
                {label: 'United States of America', value: 'united-states'}, 
            ],
            isLoading: true
        }
    }

    componentDidMount () {
        fetch ('https://api.covid19api.com/summary')
            .then ((res) => res.json())
            .then ((resJSON) => {
                var items = resJSON["Countries"].map(function(item) {
                    return {
                        label: item["Country"],
                        value: item["Slug"]
                    }
                })
                this.setState({countries: items})
            })
            .then((res) => this.setState({isLoading: false}))
            .catch (err => console.log(err))
    } 

    render() {
        if (this.state.isLoading) {
            return (<View><ActivityIndicator size="large" color="#0000ff" style={styles.spinner}/></View>)
        }
        else {
            return (
                <View>
                    <DropDownPicker style={styles.dropdown}
                        items={this.state.countries}
                        defaultValue={this.props.country}
                        containerStyle={{height: 50}}
                        dropDownStyle={{backgroundColor: 'rgba(255, 248, 225,1.0)', height: 500}}
                        dropDownMaxHeight={500}
                        labelStyle={{fontSize: 20, fontFamily: 'Avenir-Medium',color: 'rgba(0, 0, 0,1.0)' }}
                        onChangeItem={item => this.props.changeCountry(item.value)}
                        activeLabelStyle={{color: 'rgba(26, 35, 126,1.0)',fontSize:20, fontFamily: 'Avenir-Medium'}}
                        searchable={true}
                        searchablePlaceholder="Search Country"
                        searchableStyle={{backgroundColor: 'rgba(255, 248, 225,1.0)', fontSize:20, fontFamily: 'Avenir-Medium'}}
                        searchablePlaceholderTextColor="rgba(26, 35, 126,0.2)"
                        arrowStyle={{marginRight: 6}}
                        activeItemStyle={{justifyContent: 'center'}}
                        placeholderStyle={{
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}
                        selectedtLabelStyle={{
                            color: 'red'
                        }}
                        
                        // searchableError="No Country Found"
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    dropdown: {
      backgroundColor: 'rgba(255, 248, 225,1.0)',
    },

    spinner: {
        flex: 1,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems:'center'    
    }
});

export default CountrySelector
