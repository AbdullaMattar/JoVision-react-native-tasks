import React from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const icons = {
  Home: require('../Resource/icons/home.png'),
  Video: require('../Resource/icons/video.png'),
  Share: require('../Resource/icons/share.png'),
  Settings: require('../Resource/icons/settings.png'),
};
export default function Task42() {
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
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { gap: 15 }]}>
      {/* gap is like margin between children */}
      <Text>This is Home Page ! </Text>
      <Button
        title="Click to go to Video Page"
        onPress={() => navigation.navigate('Video')}
      />
      <Button
        title="Click to go to Share Page"
        onPress={() => navigation.navigate('Share')}
      />
      <Button
        title="Click to go to Settings Page"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}
function VideoScreen() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { gap: 15 }]}>
      <Text>This is Video Page !</Text>
      <Button
        title="Click to go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Click to go to Share Page"
        onPress={() => navigation.navigate('Share')}
      />
      <Button
        title="Click to go to Settings Page"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}
function ShareScreen() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { gap: 15 }]}>
      <Text>This is Share Page !</Text>
      <Button
        title="Click to go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Click to go to Video Page"
        onPress={() => navigation.navigate('Video')}
      />
      <Button
        title="Click to go to Settings Page"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}
function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { gap: 15 }]}>
      <Text>This is Settings Page !</Text>
      <Button
        title="Click to go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Click to go to Video Page"
        onPress={() => navigation.navigate('Video')}
      />
      <Button
        title="Click to go to Share Page"
        onPress={() => navigation.navigate('Share')}
      />
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
