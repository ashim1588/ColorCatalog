import { FlatList, StyleSheet } from 'react-native';
import { StrictMode, useState } from 'react';
import ColorButton from './components/ColorButton';
import defaultColors from './data/defaultColors.json';
import ColorForm from './components/ColorForm';
import { generate } from 'shortid';

export default function App() {
  const [backgroundColor, setBackgroundColor ] = useState("blue");
  const [colors, setColors] = useState([]);
  const addColor= color => {
    const newColor = {id: generate(), color}
    setColors([ newColor, ...colors]);
  }
  return (
    <StrictMode>
      <ColorForm onNewColor={addColor}/>
    <FlatList style={[styles.container, {backgroundColor}]}
    data={colors}
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
