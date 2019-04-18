import {createStackNavigator,createAppContainer} from 'react-navigation'
import LangChoose from '../App/LangChoose'
import Login from '../App/Login'
import ShowCase from '../App/ShowCase'
import Dashboard from './Dashboard'
const AppNavigator = createStackNavigator({
    LangChoose : {
        screen : LangChoose,
        navigationOptions: {
            header: null
        }
    },
    ShowCase : {
        screen: ShowCase,
        navigationOptions: {
            header : null
        }
    },
    Login : {
        screen: Login,
        navigationOptions : {
            header : null
        }
    },  
    Dashboard : {
        screen : Dashboard,
        navigationOptions : {
            header : null
        }
    }
})

export default createAppContainer(AppNavigator)