import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { colors } from '../Styles/Colors';
import Swiper from 'react-native-swiper';

class ShowCase extends Component {
  
    onLogin = () => {
        this.props.navigation.navigate('Login')
    }

  render() {
    return (
      <View style={styles.container}>
      <Swiper loop={true} autoplay={true} activeDotColor={colors.primaryColor} showsButtons={false} >
       <View style={styles.showWrapper}>
        <Text style={styles.headerText}>Easy Booking</Text>
        <Image style={styles.img} source={require('../Assets/photo_01.png')} />
        <Text style={styles.quote}>Booking your preferred bus ticket is just a few taps away</Text>
       </View>
       <View style={styles.showWrapper}>
        <Text style={styles.headerText}>Manage Trips</Text>
        <Image style={styles.img} source={require('../Assets/photo_02.png')} />
        <Text style={styles.quote}>All your trips in one place.Regular reminders about your upcoming trips</Text>
       </View>
       <View style={styles.showWrapper}>
        <Text style={styles.headerText}>Track Bus</Text>
        <Image style={styles.img} source={require('../Assets/photo_03.png')} />
        <Text style={styles.quote}>Track real time location of your bus and share with your friends</Text>
       </View>
       </Swiper>
       <View style={styles.bottomWrapper}>
        <TouchableOpacity activeOpacity={.8} onPress={this.onLogin} style={[styles.buttonWrapper,{backgroundColor: colors.primaryColor,}]}>
            <Text style={[styles.text,{color:colors.whiteColor}]}>Join</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.8} onPress={this.onLogin} style={[styles.buttonWrapper]}>
            <Text style={[styles.text,{textDecorationLine:'underline'}]}>Login</Text>
        </TouchableOpacity>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex:1
    },
    showWrapper : {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      flex:1,
      paddingTop: 30,
    },
    img : {
        width : 200,
        height : 240,
        marginVertical: 24,
    },
    headerText : {
        color : colors.primaryColor,
        fontSize : 18,
        marginVertical: 24,
        fontWeight: 'bold',
    },
    quote : {
        color : '#333',
        fontSize : 16,
        textAlign : 'center',
        marginVertical: 24,
    },
    buttonWrapper : {
        padding : 16,
        justifyContent : 'center',
        alignItems: 'center',
        marginHorizontal: 18,
    },
    text : {
        fontSize : 18,
    }
})

export default ShowCase;
