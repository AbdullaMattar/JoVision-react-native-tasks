import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const icons = {
  Home: require('../Resource/icons/home.png'),
  Video: require('../Resource/icons/video.png'),
  Share: require('../Resource/icons/share.png'),
  Settings: require('../Resource/icons/settings.png'),
};
export default function Task41() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
            paddingTop: 15,
          },
          tabBarLabelStyle: {
            marginTop: 6,
            fontSize: 12,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'home',
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.Home}
                style={[
                  styles.icon,
                  focused
                    ? { tintColor: 'rgb(38, 85, 255)' }
                    : { tintColor: '#000000' },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Video"
          component={VideoScreen}
          options={{
            title: 'Video',
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.Video}
                style={[
                  styles.icon,
                  focused
                    ? { tintColor: 'rgb(38, 85, 255)' }
                    : { tintColor: '#000000' },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Share"
          component={ShareScreen}
          options={{
            title: 'Share',
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.Share}
                style={[
                  styles.icon,
                  focused
                    ? { tintColor: 'rgb(38, 85, 255)' }
                    : { tintColor: '#000000' },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.Settings}
                style={[
                  styles.icon,
                  focused
                    ? { tintColor: 'rgb(38, 85, 255)' }
                    : { tintColor: '#000000' },
                ]}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Home Page ! </Text>
    </View>
  );
}
function VideoScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Video Page !</Text>
    </View>
  );
}
function ShareScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Share Page !</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Settings Page !</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 40,
    width: 40,
  },
});
