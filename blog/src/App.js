import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import TodoBoard from './component/todoBoard';

// 1. 사용자가 할일을 작성할 인풋창과 추가 버튼이 있다.
// 2. 할일을 작성하고 버튼을 클릭하면 아이템이 추가됨 
// 3. 아이템 삭제버튼을 누르면 삭제가 가능하다 



function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    console.log("im herereree", inputValue);
    setTodoList([...todoList,inputValue])
  }
  return (
    <div className="App">
      <main>
        <input value = {inputValue} type="text" onChange={(event) => {
          setInputValue(event.target.value)
        }}/>
        <button onClick={addItem}>추가</button>
        <TodoBoard todoList = {todoList}/>
      </main>
    </div>
  );
}

export default App;
