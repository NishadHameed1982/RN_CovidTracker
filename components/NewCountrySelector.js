import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Feather';

export class NewCountrySelector extends Component {
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
                    {/* <DropDownPicker style={styles.dropdown}
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
                    /> */}

<RNPickerSelect
placeholder={{
  label: 'Please select a country.',
  value: 'afghanistan',
  color: 'red',
}}
items={this.state.countries}
            onValueChange={(itemValue)=> this.props.changeCountry(itemValue)}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 20,
                right: 10,
              },
              placeholder: {
                color: 'rgba(53, 59, 72,1.0)',
                fontSize: 19,
                // fontWeight: 'bold',
              },
            }}

       value = {this.props.country}
            
        />

                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    dropdown: {
      flex: 2,
      backgroundColor: 'rgba(255, 248, 225,1.0)',
    },

    spinner: {
        flex: 1,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems:'center'    
    }
});

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 40,
//     paddingHorizontal: 10,
//     flex: 1,
//   },
// });

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 19,
    // fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 10,
     borderWidth: 1,
     borderColor: 'rgba(255, 248, 225,1.0)',
     backgroundColor: 'rgba(255, 248, 225,1.0)',
    borderRadius: 8,
    color: 'rgba(47, 54, 64,1.0)',
    paddingRight: 30, // to ensure the text is never behind the icon
    // fontFamily: 'Avenir-Black',
  },
  inputAndroid: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
     borderWidth: 0.5,
     borderColor: 'rgba(255, 248, 225,1.0)',
     backgroundColor: 'rgba(255, 248, 225,1.0)',
    borderRadius: 8,
    color: 'rgba(47, 54, 64,1.0)',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default NewCountrySelector
