import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Image,
} from 'react-native';

import * as firebase from 'firebase';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = { Email: '', Password: '' };
  }

  userLogin = async (email, password) => {
    if (email && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (response) {
          Alert.alert('User Logged in');
          this.props.navigation.navigate('Write A Story');
        }
      } catch (error) {
        Alert.alert('Invalid Email or Password');
      }
    } else {
      Alert.alert('Enter Email and Password');
    }
  };
  render() {
    return (
      <KeyboardAvoidingView>
        <View>
          <Image
            style={Styles.img}
            source={{
              uri:
                'http://www.bedtimestoriesonline.org/wp-content/uploads/2013/03/stockfresh_1638701_bedtime-story_sizeXS_b395f1.jpg'
            }}
          />
          <TextInput
            placeholder="Enter email"
            onChangeText={(text) => {
              this.setState({ Email: text });
            }}
            keyboardType="email-address"
            style={Styles.inputBox}></TextInput>

          <TextInput
            placeholder="Enter password"
            onChangeText={(text) => {
              this.setState({ Password: text });
            }}
            secureTextEntry={true}
            style={Styles.inputBox}></TextInput>
        </View>
        <View>
          <TouchableOpacity
            style={Styles.loginButton}
            onPress={() => {
              this.userLogin(this.state.Email, this.state.Password);
            }}>
            <Text style={{ textAlign: 'center', fontSize: 15 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const Styles = StyleSheet.create({
  loginButton: {
    width: 90,
    height: 40,
    borderRadius: 30,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
    marginTop: '5%',
  },
  inputBox: {
    width: 300,
    height: 50,
    borderWidth: 5,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '10%',
    padding:10
  },
  img: {
    width: 421,
    height: 260,
    alignSelf: 'center',
  },
});
