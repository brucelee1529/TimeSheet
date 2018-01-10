
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './StyleLogin';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> AI&T </Text>
        <TextInput
          value=""
          placeholder='nhập Email hoặc tài khoản'
          style={styles.input}
        />
        <TextInput
          value=""
          placeholder='Mật Khẩu'
          style={styles.input}
        />
        <TouchableOpacity 
          style={styles.btnLogin}
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        >
          <Text>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.txtForgot}>Bạn quên mật khẩu ?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
