import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../Config';

export default class ReadStory extends React.Component {
  constructor() {
    super();
    this.state = {
      allStories: [],
      dataSource: [],
      search: '',
    };
  }
  componentDidMount() {
    this.retrieveStories();
  }

  updateSearch = (search) => {
    this.setState({ search });
  };


  retrieveStories = () => {
    try {
      var allStories = [];
      var stories = db
        .collection('Story')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            allStories.push(doc.data());
            console.log('Story:', allStories);
          });
          this.setState({ allStories });
        });
    } catch (error) {
      console.log(error);
    }
  };

  SearchFilterFunction(text) {
    const newData = this.state.allStories.filter((component) => {
      const itemData = component.titleTxt ? component.titleTxt.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search: text,
    });
  }

  render() {
    return (
      <View>
        <View styles={{ height: 20, width: '100%' }}>
          <SearchBar
            style={styles.searchBar}
            placeholder="Write title of your story here."
            onChangeText={(text) => this.SearchFilterFunction(text)}
            onClear={(text) => this.SearchFilterFunction('')}
            value={this.state.search}
          />
        </View>

        <ScrollView>
          <View>
            {this.state.search === ''
              ? this.state.allStories.map((component) => (
                  <View
                    style={{
                      borderColor: 'black',
                      borderWidth: 3,
                      padding: 10,
                      alignItems: 'center',
                      margin: 10,
                      backgroundColor: 'blue',
                    }}>
                    <TouchableOpacity>
                      <Text style={styles.story}>Title : {component.titleTxt}</Text>
                      <Text style={styles.story}>Author : {component.authorTxt}</Text>
                      <Text style={styles.story}>Story : {component.storyTxt}</Text>
                    </TouchableOpacity>
                  </View>
                ))
              : this.state.dataSource.map((component) => (
                  <View
                    style={{
                      borderColor: 'black',
                      borderWidth: 3,
                      padding: 10,
                      alignItems: 'center',
                      margin: 30,
                      backgroundColor: 'blue',
                    }}>
                    <TouchableOpacity>
                      <Text style={styles.story}>Title : {component.titleTxt}</Text>
                      <Text style={styles.story}>Author : {component.authorTxt}</Text>
                      <Text style={styles.story}>Story : {component.storyTxt}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  story: {
    fontSize: 20,
  },
  searchBar: {
    color: 'green',
    padding: 10,
  },
});
