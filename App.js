import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadScreen from './Screens/ReadStory';
import WriteScreen from './Screens/WriteStory';
import Login from './Screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const Tabs = createBottomTabNavigator(
  {
    'Write A Story': { screen: WriteScreen },
    'Read A Story': { screen: ReadScreen },
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'Read A Story') {
          return (
            <Image
              source={require("./assets/read.png")}
              style={{ width: 30, height: 30 }}
            />
          );
        } else if (routeName === 'Write A Story') {
          return (
            <Image
              source={require('./assets/write.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        }
      },
    }),
  }
);

const SwitchNavigator = createSwitchNavigator({
  loginScreen: { screen: Login },
  tabsScreen: { screen: Tabs },
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
