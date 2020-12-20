import React, {useState} from 'react';
import {  
  StyleSheet,
  Button,
  View,
  TextInput,  
} from 'react-native';

function AddToDo({submitHandler}){
    const [text, setText] = useState(''); //yazılan text'i tutan state
    const changeHandler =(value) => {
        setText(value);
    }
    return(
        <View>
            <TextInput
                testID = "input"
                style ={styles.input}
                placeholder ='Type to do something'
                onChangeText = {changeHandler}
            />
            <Button 
                testID = "button"
                onPress={() => submitHandler(text)} 
                title ='ADD TODO' 
                color='coral' 
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'

    }
})
export default AddToDo;