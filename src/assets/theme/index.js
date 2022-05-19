import { Platform, StyleSheet } from "react-native";
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

export const NAV_HEIGHT = getStatusBarHeight() + 20;
export const HEADER_HEIGHT = isIphoneX() ? NAV_HEIGHT : getStatusBarHeight();

export const Fonts = StyleSheet.create({
    poppinSemiBold24: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-SemiBold' : 'Poppins SemiBold',
        fontSize: 24,
        color:'#333647'
    },
    poppinSemiBold22: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-SemiBold' : 'Poppins SemiBold',
        fontSize: 22,
        color:'#333647'
    },
    poppinSemiBold20: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-SemiBold' : 'Poppins SemiBold',
        fontSize: 20,
        color:'#333647'
    },
    poppinSemiBold14: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-SemiBold' : 'Poppins SemiBold',
        fontSize: 14,
        color:'#333647'
    },
    poppinSemiBold12: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-SemiBold' : 'Poppins SemiBold',
        fontSize: 12,
        color:'#333647'
    },
    poppinBold17: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Bold' : 'Poppins Bold',
        fontSize: 17,
        color:'#333647'
    },
    poppinReg14: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Regular' : 'Poppins Regular',
        fontSize: 14,
        color:'#333647'
    },
    poppinReg12: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Regular' : 'Poppins Regular',
        fontSize: 12,
        color:'#333647'
    },
    poppinReg11: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Regular' : 'Poppins Regular',
        fontSize: 11,
        color:'#333647'
    },
    poppinReg9: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Regular' : 'Poppins Regular',
        fontSize: 9,
        color:'#333647'
    },
    poppinReg16: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Regular' : 'Poppins Regular',
        fontSize: 16,
        color:'#333647'
    },
    poppinReg17: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Regular' : 'Poppins Regular',
        fontSize: 17,
        color:'#333647'
    },
    poppinReg18: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Regular' : 'Poppins Regular',
        fontSize: 18,
        color:'#333647'
    },
    poppinReg13: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Regular' : 'Poppins Regular',
        fontSize: 13,
        color:'#333647'
    },
    poppinReg15: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Regular' : 'Poppins Regular',
        fontSize: 15,
        color:'#333647'
    },
    poppinMed16: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Medium' : 'Poppins Medium',
        fontSize: 16,
        color:'#333647'
    },
    poppinMed18: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Medium' : 'Poppins Medium',
        fontSize: 18,
        color:'#333647'
    },
    poppinMed13: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Medium' : 'Poppins Medium',
        fontSize: 13,
        color:'#333647'
    },
    poppinMed12: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Medium' : 'Poppins Medium',
        fontSize: 12,
        color:'#333647'
    },
    poppinMed14: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Medium' : 'Poppins Medium',
        fontSize: 14,
        color:'#333647'
    },
    poppinMed15: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Medium' : 'Poppins Medium',
        fontSize: 15,
        color:'#333647'
    },
    poppinMed17: {
        fontFamily: Platform.OS == 'android' ? 'Poppins-Medium' : 'Poppins Medium',
        fontSize: 17,
        color:'#333647'
    },
    interLight12: {
        fontFamily: Platform.OS == 'android' ? 'Inter-Light' : 'Inter Light',
        fontSize: 12,
        color:'#333647'
    },
    interLight11: {
        fontFamily: Platform.OS == 'android' ? 'Inter-Light' : 'Inter Light',
        fontSize: 11,
        color:'#333647'
    },
    interReg14: {
        fontFamily: Platform.OS == 'android' ? 'Inter-Regular' : 'Inter Regular',
        fontSize: 14,
        color:'#333647'
    },
    interReg14: {
        fontFamily: Platform.OS == 'android' ? 'Inter-Regular' : 'Inter Regular',
        fontSize: 14,
        color:'#333647'
    },
    interReg18: {
        fontFamily: Platform.OS == 'android' ? 'Inter-Regular' : 'Inter Regular',
        fontSize: 18,
        color:'#333647'
    },
    interReg16: {
        fontFamily: Platform.OS == 'android' ? 'Inter-Regular' : 'Inter Regular',
        fontSize: 16,
        color:'#333647'
    },
    interReg15: {
        fontFamily: Platform.OS == 'android' ? 'Inter-Regular' : 'Inter Regular',
        fontSize: 15,
        color:'#333647'
    },
    interMed12: {
        fontFamily: Platform.OS == 'android' ? 'Inter-Medium' : 'Inter Medium',
        fontSize: 12,
        color:'#333647'
    },
    interMed14: {
        fontFamily: Platform.OS == 'android' ? 'Inter-Medium' : 'Inter Medium',
        fontSize: 14,
        color:'#333647'
    },
    interSemiBold11: {
        fontFamily: Platform.OS == 'android' ? 'Inter-SemiBold' : 'Inter SemiBold',
        fontSize: 11,
        color:'#333647'
    },
    interSemiBold16: {
        fontFamily: Platform.OS == 'android' ? 'Inter-SemiBold' : 'Inter SemiBold',
        fontSize: 16,
        color:'#333647'
    },
    interSemiBold18: {
        fontFamily: Platform.OS == 'android' ? 'Inter-SemiBold' : 'Inter SemiBold',
        fontSize: 18,
        color:'#333647'
    },
    interSemiBold15: {
        fontFamily: Platform.OS == 'android' ? 'Inter-SemiBold' : 'Inter SemiBold',
        fontSize: 15,
        color:'#333647'
    },
    interSemiBold14: {
        fontFamily: Platform.OS == 'android' ? 'Inter-SemiBold' : 'Inter SemiBold',
        fontSize: 15,
        color:'#333647'
    },
    interSemiBold20: {
        fontFamily: Platform.OS == 'android' ? 'Inter-SemiBold' : 'Inter SemiBold',
        fontSize: 20,
        color:'#333647'
    },
    interSemiBold22: {
        fontFamily: Platform.OS == 'android' ? 'Inter-SemiBold' : 'Inter SemiBold',
        fontSize: 22,
        color:'#333647'
    },
    interMed15: {
        fontFamily: Platform.OS == 'android' ? 'Inter-Medium' : 'Inter Medium',
        fontSize: 15,
        color:'#333647'
    },
    interMed16: {
        fontFamily: Platform.OS == 'android' ? 'Inter-Medium' : 'Inter Medium',
        fontSize: 16,
        color:'#333647'
    },
    interMed18: {
        fontFamily: Platform.OS == 'android' ? 'Inter-Medium' : 'Inter Medium',
        fontSize: 18,
        color:'#333647'
    },
    ubuntuBold17: {
        fontFamily: Platform.OS == 'android' ? 'Ubuntu-Bold' : 'Ubuntu Bold',
        fontSize: 17,
        color:'#333647'
    },
    ubuntuReg14: {
        fontFamily: Platform.OS == 'android' ? 'Ubuntu-Regular' : 'Ubuntu Regular',
        fontSize: 14,
        color:'#333647'
    },
    ubuntuMed15: {
        fontFamily: Platform.OS == 'android' ? 'Ubuntu-Medium' : 'Ubuntu Medium',
        fontSize: 15,
        color:'#333647'
    },
})
