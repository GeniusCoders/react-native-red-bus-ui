import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { colors } from '../Styles/Colors';
import Header from '../Components/Header'

class Login extends Component {
  
    onLogin = () => {
        this.props.navigation.navigate('Dashboard')
    }

  render() {
    return (
      <View style={styles.container}>
        <Header text="Login / Signup" isBack={true} />
        <View style={styles.wrapper}>
         <View style={styles.topWrapper}>
          <Text style={styles.title}>Join over 60 million travellers!</Text>
          <View style={styles.imgWrapper}>
           <Image width={60} height={60} borderRadius={30} style={styles.img} resizeMode='contain'
           source={require('../Assets/facebook.png')}/>
           <Image width={50} height={50} borderRadius={30} style={[styles.img,{borderWidth:.8}]} resizeMode='contain'
           source={require('../Assets/google.png')}/>
          </View>
          <View style={{padding:10}}>
          <Text style={styles.text}>Don't worry, we never post anything on your account</Text>
          </View>
         </View>
         <View style={styles.orWrapper}>
             <View style={styles.line}></View>
             <Text style={styles.orText}>OR</Text>
             <View style={styles.line}></View>
         </View>
         <View style={styles.buttonContainer}>
         <TouchableOpacity activeOpacity={.8} style={styles.buttonWrapper}>
             <Text style={styles.buttonText}>Sign Up</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={this.onLogin} activeOpacity={.8} style={styles.buttonWrapper}>
             <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>
         </View>
         <View style={styles.termsWrapper}>
             <Text style={styles.firstText}>By logging in, you agree to our 
                 <Text style={styles.secondText}> Terms and conditions</Text> and 
                 <Text style={styles.secondText}> Privacy Policy</Text></Text>
         </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex:1
    },
    wrapper : {
        justifyContent : 'center',
        alignItems: 'center',
        flex:1,
        padding : 18
    },
    title : {
        fontSize : 20,
        color: '#333',
        textAlign : 'center',
        fontWeight: 'bold',
    },
    imgWrapper : {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        marginTop: 20,
    },
    img : {
        width : 80,
        height : 80,
        borderRadius: 40,
    },
    text : {
        textAlign :'center',
        fontSize : 15
    },
    orWrapper : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
        marginVertical: 20,
    },
    orText : {
        color : '#333'
    },
    line : {
        borderWidth : .5,
        borderColor: '#333',
        width : 40,
        marginHorizontal: 10,
    },
    buttonWrapper : {
        paddingVertical : 10,
        paddingHorizontal: 18,
        borderWidth : 1,
        borderColor : colors.primaryColor,
        justifyContent : 'center',
        alignItems : 'center',
        marginHorizontal : 16
    },
    buttonText : {
        color : colors.primaryColor,
        fontSize : 18
    },
    buttonContainer : {
        justifyContent : 'center',
        flexDirection : 'row',
        alignItems : 'center'
    },
    firstText : {
       color : '#333',
       textAlign : 'center'
    },
    secondText : {
        color : colors.primaryColor,
        textDecorationLine:'underline'
    },
    termsWrapper : {
        marginTop : 40,
        padding : 10,
    }
})

export default Login;
