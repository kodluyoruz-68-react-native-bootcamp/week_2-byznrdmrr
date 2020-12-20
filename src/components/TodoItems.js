import React from 'react';
import {  
  Text, 
  StyleSheet,
  TouchableOpacity,  
} from 'react-native';
function TodoItems({item, PressHandler,onClick}){
    return(
        <TouchableOpacity
            onLongPress = {() => PressHandler(item.key)}
            onPress = {() => onClick(item.key)}> 
            <Text style ={styles.item}>{item.text}</Text>          
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})
export default TodoItems;