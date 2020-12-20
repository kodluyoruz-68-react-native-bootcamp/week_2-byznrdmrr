import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet,
  Alert, 
  TouchableWithoutFeedback, 
  Keyboard
} from 'react-native';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import AddToDo from './components/AddTodo';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 * 
 */
function App() {
  const [todos, setTodos] = useState([
    { text: 'go to shopping', key: '0'},
    { text: 'complete the homeworks', key: '1'},
    { text: 'coding time!', key:'2'}
  ]);
  const PressHandler =(key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);

    })
  }
  const submitHandler = (text) => {
    if(text.length > -1 ) { //input boş ise eklenmez
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      });
    }   
  }
  return(
    <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss(); //herhangi bir yere tıklayınca klavyenin kaybolmsı
    }}>
    <View style = {styles.container}>
      <Header />   
      <View style = {styles.content}>
        <AddToDo submitHandler = {submitHandler} /> 
        <View style = {styles.list}> 
          <FlatList 
            testID = "list"
            data = {todos}
            renderItem = {({item}) => (
              <TodoItems 
                item = {item}
                PressHandler={PressHandler} 
              />
            )}
          />
        </View>
      </View>
    </View> 
    </TouchableWithoutFeedback>  
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },  
  content: {
    padding: 40,
  }, 
  list: {
    marginTop: 20,
  }
});
export default App;
