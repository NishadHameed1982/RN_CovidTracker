import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../components/styles/SliderEntry.style';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { image }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={image}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.20}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={image}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { category, subcategory, title }, even } = this.props;

        const uppercaseTitle = category ? (
            <Text
              style={[styles.category, even ? styles.titleEven : styles.title]}
              numberOfLines={3}
            >
                { category.toUpperCase() }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
            //   onPress={() => { alert(`You've clicked '${category}'`); }}
              >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                    {/* <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} /> */}
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                <Text
                      style={[styles.title, even ? styles.subcat : styles.subcatEven]}
                      numberOfLines={10}
                    >
                        { subcategory }
                    </Text>
                    { uppercaseTitle }
                   
                    <Text
                      style={[styles.title, even ? styles.subtitleEven : styles.subtitle]}
                      numberOfLines={10}
                    >
                        { title }
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
