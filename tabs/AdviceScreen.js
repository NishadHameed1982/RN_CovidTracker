import React, { Component } from 'react';
// import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, Image } from 'react-native';

import {
    Platform, 
    View, 
    ScrollView, 
    Text, 
    StatusBar, 
    SafeAreaView, 
    Image,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    Alert,
  } from 'react-native'


import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../components/styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import styles, { colors } from '../components/styles/index.style';
import { ENTRIES4 } from '../components/static/entries';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 0;
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class AdviceScreen extends Component {

constructor(props){
    super(props);
    this.state={
        ENTRIES4:[],
         slider1ActiveSlide: SLIDER_1_FIRST_ITEM

    }

}


    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 100 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    _renderLightItem ({item, index}) {
        return <SliderEntry data={item} even={false} />;
    }

    _renderDarkItem ({item, index}) {
        return <SliderEntry data={item} even={true} />;
    }


    

    symptoms(title, subtitle) {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES4}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  activeSlideAlignment={'center'}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={ENTRIES4.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgb(41, 98, 255)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.gray}
                  inactiveDotOpacity={0.8}
                  inactiveDotScale={1.0}
                  carouselRef={this._slider1Ref}
                 tappableDots={!!this._slider1Ref}
            
                />
            </View>
        );
    }

   
    get gradient () {
        return (
            <LinearGradient
              colors={[colors.backgroundSym1, colors.backgroundSym2]}
              startPoint={{ x: 1, y: 0 }}
              endPoint={{ x: 0, y: 1 }}
              style={styles.gradient}
            />
        );
    }

    render () {
        const covidAdvice = this.symptoms("COVID TRACKER", 'Symptoms & Prevention Tips');

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                    { this.gradient }
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={false}
                    >
                        { covidAdvice }
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}


