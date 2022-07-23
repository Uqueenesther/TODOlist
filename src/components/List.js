import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList} from '@fortawesome/free-solid-svg-icons'


const List =( {todo, handleDelete, handleEditClick, handleComplete, isComplete}) => {
    return(
        <div className="list-container">
            <div className="list-h1">
                <h2 className={`${isComplete ? "text-output": ""}`}>
                  {todo.text}
                  <FontAwesomeIcon icon={faList} className=" check-icon" />   
                </h2>
            </div>

            <div >
                <button onClick={()=>handleComplete(todo.id)}  className="done" > done</button>
                <button onClick={()=>handleEditClick(todo)}> edit</button>
                <button  onClick={()=>handleDelete(todo.id)} className="remove" >delete</button>
            </div>
             
            
        </div>

    )
}


export default List