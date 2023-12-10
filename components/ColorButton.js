import { useState } from "react"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"

const ColorButton  = ({color, onPress}) => {
    return(
    <TouchableHighlight style={styles.button}
      onPress={() => onPress(color)}
      underlayColor={"orange"}
      >
        <View style={styles.row}>
            <View style={[styles.sample, {backgroundColor: color}]}/>
        <Text style={styles.buttonText}>{color}</Text>
        </View>
      </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
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
  

export default ColorButton;