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
  const [todos, setTodos] = useState([ //todo'ların tutulduğu state
    
  ]);
  const PressHandler =(key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }
  const toogleToDo =(key) => {
    const index = todos.findIndex((u)=> u.key === key );
    const newArray = [...todos];
    newArray[index].isDone = !newArray[index].isDone;
    setTodos(newArray);
  };

  const submitHandler = (text) => {
    if(text.length > 0 ) { //input boş ise eklenme
      const todoObj={
        text, 
        key: Math.random().toString(),
        isDone: false,
      }
      setTodos(
        [...todos,todoObj]
      )
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
                onClick={toogleToDo}

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
