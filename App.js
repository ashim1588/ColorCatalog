import { Alert, Dimensions, FlatList, Image, StyleSheet,  Text,  TouchableHighlight,  View } from 'react-native';
import { StrictMode, useState } from 'react';
import ColorButton from './components/ColorButton';
import defaultColors from './data/defaultColors.json';
import ColorForm from './components/ColorForm';

export default function App() {
  const [backgroundColor, setBackgroundColor ] = useState("blue");
  return (
    <StrictMode>
      <ColorForm onNewColor={newColor => Alert.alert(`TODO: add color`, newColor)}/>
    <FlatList style={[styles.container, {backgroundColor}]}
    data={defaultColors}
    renderItem={({ item })=> {
      return (
        <ColorButton key={item.id} color={item.color}  onPress={setBackgroundColor} />
      )
    }}
    />
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});
