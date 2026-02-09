import React, { Component, useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { textChanged } from '../store/index';
import { connect } from 'react-redux';
export default function Task40() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && <ConnectedMyClass />}
    </SafeAreaView>
  );
}

// const MyFunc = () => {
//   const text = useSelector(state => state.value);
//   const dispatch = useDispatch();
//   return (
//     <TextInput
//       value={text}
//       placeholder="Type here"
//       onChangeText={newText => dispatch(textChanged(newText))}
//       style={{ borderWidth: 15, color: 'black' }}
//       placeholderTextColor="green"
//     />
//   );
// };

class MyClass extends Component {
  render() {
    return (
      <TextInput
        value={this.props.text}
        placeholder="Type here"
        onChangeText={newText => this.props.textChanged(newText)}
        style={{ borderWidth: 15, color: 'black' }}
        placeholderTextColor="green"
      />
    );
  }
}
const mapStateToProps = state => ({
  text: state.value,
});

const mapDispatchToProps = { textChanged };

const ConnectedMyClass = connect(mapStateToProps, mapDispatchToProps)(MyClass);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
