import { Dimensions, Image, StyleSheet,  Text,  TouchableHighlight,  View } from 'react-native';
import picBiscuit from './assets/biscuit.jpg';
import picJungle from './assets/jungle.jpg';
import { StrictMode, useState } from 'react';
import ColorButton from './ColorButton';

export default function App() {
  const [backgroundColor, setBgColor ] = useState("blue");
  return (
    <StrictMode>
    <View style={[styles.container, {backgroundColor}]}>
      <ColorButton color="red" />
      <ColorButton color="green" />
      <ColorButton color="blue" />
      <ColorButton color="yellow" />
      <ColorButton color="purple" />
    </View>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: "rgba(255,255,255, .8)"
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
