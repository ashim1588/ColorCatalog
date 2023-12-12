import { FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';
import ColorButton from './ColorButton';
import ColorForm from './ColorForm';
import { useColors } from '../hooks';

export default function ColorList() {
  const [backgroundColor, setBackgroundColor ] = useState("blue");
  const { colors, addColor } = useColors();
  return (
    <>
      <ColorForm onNewColor={addColor}/>
    <FlatList style={[styles.container, {backgroundColor}]}
    data={colors}
    renderItem={({ item })=> {
      return (
        <ColorButton key={item.id} color={item.color}  onPress={setBackgroundColor} />
      )
    }}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});
