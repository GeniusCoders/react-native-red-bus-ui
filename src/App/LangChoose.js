import React,{Component} from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native';
import Header from '../Components/Header'
import { colors } from '../Styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen'

let languages = [
    {'Title' : 'English',
     'isSelecet' : false
    },
    {'Title' : 'हिन्दी',
     'isSelecet' : false
    },
    {'Title' : 'বাংলা',
     'isSelecet' : false
    },
    {'Title' : 'தமிழ்',
     'isSelecet' : false
    },
    {'Title' : 'मराठी',
     'isSelecet' : true
    },
    {'Title' : 'తెలుగు',
     'isSelecet' : false
    },
    {'Title' : 'ಕನ್ನಡ',
     'isSelecet' : false
    },
]

export class LangChoose extends Component {

    state = {
        isSelecet : false
    }
    
    onRadio(i) {
    }

    onContinue = () => {
       this.props.navigation.navigate('ShowCase')
   }
   
   componentDidMount = () => {
       SplashScreen.hide()
   }

   render(){
    const {isSelecet} = this.state
    return(
        <View style={styles.container}>
           <Header text="Country and Language"/>
           <View style={styles.countryContainer}>
            <Text style={styles.countryText}>Country</Text>
            <View style={styles.countryWrapper}>
             <Image  style={styles.img} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FiUHHBQp-2674jfqZ3bLowdnkxR6S1u_YdVE61hI4zFtasMPTA'}}/>
             <Text style={styles.countryName}>India</Text>
             <Icon name="chevron-down" size={24} color={colors.primaryColor} />
            </View>
           </View> 
           <View style={styles.languageWrapper}>
             <Text style={styles.countryText}>Languages</Text>
             <View style={styles.languageContainer}>
              {
                  languages.map((data,i) => 
                  
                  <TouchableOpacity style={styles.lanWrapper} activeOpacity={.8} onPress={()=>this.onRadio(i)}
                   key={i} contentContainerStyle={styles.lanWrapper}>
                   <Text style={styles.langText}>{data.Title}</Text>
                   {
                       data.isSelecet ?  <Icon name="radiobox-marked" size={20} color={colors.primaryColor} /> : 
                       <Icon name="radiobox-blank" size={20} />
                   }
                  
                  </TouchableOpacity>
                  )
              }
             </View>
           </View>
           <TouchableOpacity onPress={this.onContinue}  activeOpacity={.8} style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>CONTINUE</Text>
           </TouchableOpacity>
        </View>
    )
  }

}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    countryContainer : {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    countryText : {
        fontSize : 18,
        color : colors.primaryColor,
        fontWeight: 'bold'
    },
    countryWrapper : {
        padding : 16,
        backgroundColor: colors.whiteColor,
        flexDirection: 'row',
        elevation : 1,
        marginTop: 14,
        alignContent: 'center',
    },
    img : {
        width : 20,
        height : 16,
        alignSelf: 'center',
    },
    countryName : {
        fontSize : 18,
        color : colors.primaryColor,
        fontWeight : 'bold',
        marginHorizontal: 20,
        flex:1
    },
    languageWrapper : {
        paddingHorizontal: 20,
        paddingTop: 20,
        flex:1
    },
    languageContainer : {
        paddingHorizontal : 14,
        backgroundColor: colors.whiteColor,
        elevation : 1,
        marginVertical: 14,
        paddingTop : 14
    },
    lanWrapper : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    langText : {
        color : '#333',
        fontSize : 18
    },
    buttonWrapper : {
        padding : 16,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: colors.primaryColor,
    },
    buttonText : {
        fontSize : 18,
        color : colors.whiteColor
    }
})

export default LangChoose;
