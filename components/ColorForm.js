import { useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function ColorForm({onNewColor = f => f}) {

    const sendData = () => {
        input.current.blur();
        onNewColor(inputValue);
        setInputValue("");
    }
const [inputValue, setInputValue ] = useState("");
const input = useRef();
    return(
        <View style={styles.container}>
            <TextInput 
            value={inputValue}
            ref={input}
            onChangeText={text => setInputValue(text)}
            style={styles.txtInput}
            autoCapitalize="none"
            placeholder="Enter a color"
             />
            <Button title="add" onPress={sendData}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    txtInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 5,
        borderRadius: 5,
        padding: 5,
    }
})