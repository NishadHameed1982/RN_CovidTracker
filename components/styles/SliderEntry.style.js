import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.70;
const slideWidth = wp(80);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 12;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'rgb(0, 0, 0)',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    imageContainerEven: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'rgb(0, 0, 0)',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'rgb(255, 255, 255)'
    },
    radiusMaskEven: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'rgb(255, 255, 255)'
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(0, 145, 234)',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius,
        height: slideHeight*0.48,

    },
    textContainerEven: {
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(0, 145, 234)',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius,
       height: slideHeight*0.48,
    
    
    },
    title: {
        color: 'rgb(33, 33, 33)',
        fontSize: 20,
        fontFamily: 'MontserratAlternates-Black',
        // fontWeight: 'bold',
        letterSpacing: 0.2
    },
    titleEven: {
        color: 'rgb(0, 0, 0)',
        fontSize: 20,
        // fontWeight: 'bold',
        letterSpacing: 0.2
    },

    subcat: {
        marginTop: 2,
        color: 'rgba(34, 47, 62,.50)',
        fontFamily: 'MontserratAlternates-Bold',
        fontSize: 17,
        // fontStyle: 'italic'
        
    },
    subcatEven: {
        marginTop: 2,
        color: 'rgba(34, 47, 62,0.50)',
        fontFamily: 'MontserratAlternates-Bold',
        fontSize: 17,
        // fontStyle: 'italic'
    },


    subtitle: {
        marginTop: 3,
        color: 'rgb(0, 0, 0)',
        fontFamily: 'MontserratAlternates-SemiBold',
        fontSize: 14,
        // fontStyle: 'italic'
        
    },
    subtitleEven: {
        marginTop: 3,
        color: 'rgb(0, 0, 0)',
        fontFamily: 'MontserratAlternates-SemiBold',
        fontSize: 14,
        // fontStyle: 'italic'
    }
});

