import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../Config';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      titleTxt: '',
      authorTxt: '',
      storyTxt: '',
    };
  }

  submitStory = () => {
    console.log('begin');
    db.collection('Story').add({
      titleTxt: this.state.titleTxt,
      authorTxt: this.state.authorTxt,
      storyTxt: this.state.storyTxt,
    });
    console.log('end');
    this.setState({
      titleTxt: '',
      authorTxt: '',
      storyTxt: '',
    });
    alert('Your story has been submitted.');
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior="padding" enabled>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.titleBox}
          placeholder="Write the title of the story here"
          onChangeText={(text) => {
            this.setState({ titleTxt: text });
          }}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write the name of the author here"
          onChangeText={(text) => {
            this.setState({ authorTxt: text });
          }}
        />

        <TextInput
          style={styles.storyBox}
          placeholder="Write your story here"
          onChangeText={(text) => {
            this.setState({ storyTxt: text });
          }}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'black',
    flex: 1,
  },
  header: {
    backgroundColor: '#fa8469',
  },
  headerText: {
    color: '#39b39c',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
    width: 300,
    height: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 15,
  },
  authorBox: {
    width: 300,
    height: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 15,
  },
  storyBox: {
    width: 300,
    height: 225,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 15,
    color: 'black',
  },
  submitButton: {
    backgroundColor: 'orange',
    width: 166,
    height: 40,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
  },
});