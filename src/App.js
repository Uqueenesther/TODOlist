import React, {useEffect,useState} from 'react';
import AddTodo from './components/AddTodo';
import ModalBox from './components/ModalBox';
import './App.css';
import ListArray from './components/ListArray';



function App(){
  
  const [showBox, setShowBox] = useState(false)
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(() =>{
  const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [isComplete, setIsComplete] = useState('')
  
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


   const handleInputChange=(event)=> {
    setInput(event.target.value)
    console.log(event.target.value)
   }

   function handleEditInputChange(e) {
    setCurrentTodo({...currentTodo, text: e.target.value});
    console.log(currentTodo);
  }

   function handleformAdd(e){
    console.log('input' , input)
    e.preventDefault();
    input === "" ? alert(" field can't be empty") && setInput("")
    :
    setTodos([
      ...todos,
      {
       id: todos.length +1,
       text: input.trim(),
       done : false
      }
    ])
    setInput(""); 
     console.log('todo2', todos);
    // clear out the input box
   
   }

   function handleEditFormSubmit(e){
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
   }

   function handleDelete(id){
    const removeItem = todos.filter((todo)=>{
      return todo.id !== id;
    });
    setTodos(removeItem)
   }

  
   function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) =>{
      return todo.id === id ? updatedTodo : todo;
    });
     setIsEditing(false);
     console.log(updatedItem, 'updated');
     setTodos(updatedItem)
   }

   function handleEditClick(todo) {
    setShowBox(true)
    setIsEditing(true);
    setCurrentTodo({...todo})
   }

   function handleComplete(id){
      const complete = todos.map((todo)=> {
        return todo.id === id ? {...todo, done: !todo.done} : {...todo};
      })
      console.log(complete)
     setTodos(complete)
   }

   
    return(
      <div >
        
          <AddTodo 
          showBox = {showBox} 
          setShowBox = {setShowBox}/>

          <ModalBox showBox = {showBox} 
            setShowBox = {setShowBox}
            input = {input}
            handleInputChange = {handleInputChange}
            handleformAdd = {handleformAdd}
            isEditing = {isEditing}
            currentTodo={currentTodo}
            setCurrentTodo ={setCurrentTodo}
            handleEditInputChange ={handleEditInputChange}
            handleEditFormSubmit ={handleEditFormSubmit}
            
          />
          
          <ListArray 
          todos={todos}
          setTodos={setTodos}
          handleDelete ={handleDelete}
          handleEditClick={handleEditClick}
          handleComplete={handleComplete}
          setisComplete ={setIsComplete}
          isComplete = {isComplete}

          />

      </div>
    )

 }
  
export default App;
