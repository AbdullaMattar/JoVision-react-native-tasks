import React from 'react';
import { Text, View, ScrollView, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
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
function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        {/*
        <Task16></Task16>
        <Task17></Task17>
        <Task18></Task18>
        <Task19 /> 
        <Task20 />
        <Task21 />
        <Task22 />
        <Task23 />
        <Task24 />
        <Task25 />
      */}
        <Task26 />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
