import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faCheck} from '@fortawesome/free-solid-svg-icons'

const ListArray =({todos, handleDelete, handleEditClick, handleComplete, isComplete})=>{
     return(
         <div>
           
            {todos.map((todo, index) =>
                 
               <div   key={todo.id}  className="list-container">
                    <div className="list-h1">
                         <h2 className={`${isComplete === todo.id ? "text-output": ""}`}>
                              {todo.text}
                              <FontAwesomeIcon className="list-icon"  icon={isComplete === todo.id ? faCheck : faList}  /> 
                         </h2>
                    </div>

                <div >
                    <button onClick={()=>handleComplete(todo.id)}  className="done" > done</button>
                    <button onClick={()=>handleEditClick(todo)}> edit</button>
                    <button  onClick={()=>handleDelete(todo.id)} className="remove" >delete</button>
                    </div>
               </div>
              )}  
         </div>
     )
}


export default ListArray;


 