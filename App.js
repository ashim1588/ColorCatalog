import { StyleSheet,  Text,  View } from 'react-native';
import Cat from './assets/jungle.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>[TODO: INSERT CAT]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
  },
  selectedText: {
    backgroundColor: 'red',
    color: 'yellow',
  }
});
