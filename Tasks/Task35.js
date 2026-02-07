import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Task34() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [reload, setReload] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <Display doReload={reload} />
      <TextInput
        placeholderTextColor="black"
        placeholder="Name"
        onChangeText={text => setName(text)}
        style={styles.txtinput}
      />
      <TextInput
        placeholderTextColor="black"
        placeholder="Age"
        onChangeText={text => setAge(text)}
        style={styles.txtinput}
      />
      <TextInput
        placeholderTextColor="black"
        placeholder="Country"
        onChangeText={text => setCountry(text)}
        style={styles.txtinput}
      />
      <Button
        title="Save"
        onPress={async () => {
          try {
            const data = {
              Name: name,
              Age: age,
              Country: country,
              timestamp: Date.now(),
            };
            await storeData(data);
          } catch (e) {
            console.log(e.message);
          } finally {
            setReload(r => r + 1);
          }
        }}
      />
    </SafeAreaView>
  );
}
const storeData = async value => {
  if (value.Age === '' || value.Name === '' || value.Country === '')
    throw new Error('Wrong inputs');
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem('abdulla', jsonValue);
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('abdulla');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e.message);
  }
};

function Display(props) {
  const [readData, setReadData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setReadData(data);
    })();
  }, [props.doReload]);

  if (!readData) return <Text>No Data present yet</Text>;
  const isFresh = Date.now() - readData.timestamp < 60000;

  return (
    <View style={{ borderWidth: 7, padding: 20, marginBottom: 30 }}>
      {isFresh ? (
        <>
          <Text>Name: {readData.Name}</Text>
          <Text>Age: {readData.Age}</Text>
          <Text>Country: {readData.Country}</Text>
        </>
      ) : (
        <Text>Saved data is older than 1 min</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    margin: 15,
  },
  txtinput: { color: 'black', borderWidth: 2, padding: 10, marginBottom: 10 },
});
