/* eslint-disable */
import React from 'react';
import 'react-native-gesture-handler';
import { Text, View, ScrollView, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import store from './store/index';
import Task16 from './Tasks/Task16';
import Task17 from './Tasks/Task17';
import Task18 from './Tasks/Task18';
import Task19 from './Tasks/Task19';
import Task20 from './Tasks/Task20';
import Task21 from './Tasks/Task21';
import Task22 from './Tasks/Task22';
import Task23 from './Tasks/Task23';
import Task24 from './Tasks/Task24';
import Task25 from './Tasks/Task25';
import Task26 from './Tasks/Task26';
import Task27 from './Tasks/Task27';
import Task28 from './Tasks/Task28';
import Task29 from './Tasks/Task29';
import Task30 from './Tasks/Task30';
import Task31 from './Tasks/Task31';
import Task32 from './Tasks/Task32';
import Task33 from './Tasks/Task33';
import Task34 from './Tasks/Task34';
import Task35 from './Tasks/Task35';
import Task36 from './Tasks/Task36';
import Task37 from './Tasks/Task37';
import Task38 from './Tasks/Task38';
import Task39 from './Tasks/Task39';
import Task40 from './Tasks/Task40';
import Task41 from './Tasks/Task41';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <Provider store={store}>
          <NavigationContainer>
            <Task41 />
          </NavigationContainer>
        </Provider>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
