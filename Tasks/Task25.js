import { Component, createRef } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Task25() {
  const myref = createRef(); // useRef(null) is also possible

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Type Here"
        onChangeText={inputText => myref.current?.printText(inputText)} //myref.current? => Call printText only if current exists
      />
      <MyClassPage ref={myref} />
    </SafeAreaView>
  );
}

class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = { txt: '' };
  }

  printText = inputText => {
    this.setState({ txt: inputText });
  };

  render() {
    return <Text>{this.state.txt}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
