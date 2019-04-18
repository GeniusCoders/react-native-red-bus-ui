import React, { Component } from 'react';
import { View, Text,StyleSheet,StatusBar } from 'react-native';
import {colors} from '../Styles/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { withNavigation } from "react-navigation";

class Header extends Component {
    onBack = () => {
        this.props.navigation.pop(1);
      };
  render() {
    const {text,isBack} = this.props
    return (
      <View style={styles.container}>
        <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = {colors.primaryDarkColor}/>
        {
            isBack && (
             <Icon onPress={this.onBack} style={{ marginRight: 20,}} name="arrow-left" color={colors.whiteColor} size={22} />
            )
        }
         <Text style={styles.text}> {text} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
      backgroundColor: colors.primaryColor,
      padding: 16,
      flexDirection : 'row',
      alignItems: 'center',
    },
    text : {
        color : colors.whiteColor,
        fontSize : 18,
    }
})

export default withNavigation(Header);
