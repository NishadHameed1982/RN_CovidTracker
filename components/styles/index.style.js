import { StyleSheet } from 'react-native';


export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: 'rgba(0, 0, 0,1.0)',
    background2: 'rgba(150, 150, 150,1.0)',

    backgroundSym1: 'rgba(0, 0, 0,1.0)',
    backgroundSym2: 'rgba(255, 255, 255,1.0)',
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 15
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 196, 0,1.0)',
        fontSize: 32,
        fontFamily: 'MontserratAlternates-Black',
        textAlign: 'center'
        // fontWeight: 'bold',
        // textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        // marginTop: 5,
        // paddingHorizontal: 30,
        // backgroundColor: 'transparent',
        // color: 'rgba(255, 255, 255, 0.75)',
        // fontSize: 13,
        // fontStyle: 'italic',
        // textAlign: 'center'
        color: 'rgba(255, 196, 0,0.75)',
    fontSize: 16,
    fontFamily: 'MontserratAlternates-Bold',
    textAlign: 'center'
    },
    slider: {
        marginTop: 10,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 0,
        paddingTop: 0,
    
       
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: -4,
 
      
    }
});
