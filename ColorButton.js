import { useState } from "react"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"

const ColorButton  = (props) => {
    // const [bgColor, setBgColor] = useState("blue");
    return(
    <TouchableHighlight style={styles.button}
    //   onPress={() => setBgColor("yellow")}
    //   underlayColor={"orange"}
      >
        <View style={styles.row}>
            <View style={[styles.sample, {backgroundColor: props.color}]}/>
        <Text style={styles.buttonText}>{props.color}</Text>
        </View>
      </TouchableHighlight>
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
  

export default ColorButton;