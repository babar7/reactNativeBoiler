import { StackNavigator, TabNavigator } from 'react-navigation';
import { SignupPage, SigninPage, HomePage, AboutPage } from './application/components'

// Navigate Component
const Routing = StackNavigator({

  signin: {
    screen: SigninPage,
    navigationOptions: () => ({
      title: 'Please identify your self!'
    })
  },
  home: {
    screen: HomePage
  },
  signup: {
    screen: SignupPage,
  },
  signin: {
    screen: SigninPage
  }











  // Dashboard : {
  //   screen : TabNavigator({
  //     Home: {
  //         screen: HomePage,          
  //       },
  //     About: {
  //       screen: AboutPage,
  //       },
  //   })
  // }
});



export default Routing
