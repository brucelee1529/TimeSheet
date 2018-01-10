
import {
    StackNavigator,
  } from 'react-navigation';
  
import Home from './Screens/Home';
import ForgotPassword from './Screens/ForgotPassword';
import Login from './Screens/Login';

export const RootStack = StackNavigator({
    LoginScreen: { screen: Login,
        navigationOptions: {
            title: 'Đăng Nhập'
        }
    },
    HomeScreen: { screen: Home,
        navigationOptions: {
            title: 'Trang Chủ'
        }
    },
    ForgotPasswordScreen: { screen: ForgotPassword,
        navigationOptions: {
            title: 'Quên Mật Khẩu'
        }
    },
  });

