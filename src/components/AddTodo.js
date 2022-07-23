import React from  'react';
import '../App.css';


const AddTodo = ({ setShowBox}) => {
    return( 
       <div className='header' >
           <h3 className='multicolour'> eList  </h3>
           <div className='nav-bar' >
            <button  onClick={()=> setShowBox(true)}> click to add</button>         
           </div>
     </div> 
    )

}

export default AddTodo;