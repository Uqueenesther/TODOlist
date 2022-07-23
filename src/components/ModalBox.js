import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose} from '@fortawesome/free-solid-svg-icons'
import '../App.css';

const ModalBox =({showBox, setShowBox , input,  handleInputChange,handleformAdd,  currentTodo,
                    handleEditInputChange, setIsEditing,  isEditing,  handleEditFormSubmit}) =>{

                    return(
                    <div className={`${!showBox ? 'hide-container': ""}`}>
                     <div className='container' >
                            <div className='modal'>
                               <div>
                                    <h2 className='modal-header'> 
                                        {!isEditing ? "What needs to be done?" : "edit "}
                                        <FontAwesomeIcon icon={faWindowClose} className ="close-icon" onClick={()=> setShowBox(false)} />
                                    </h2>
                                </div>
                          <div>
                            {!isEditing ? (
                                    <form className='form'>
                                            <input type="text"
                                            className="modal-input"
                                            value={input} 
                                            onChange={handleInputChange}
                                            placeholder=" enter Todo" 
                                            autoComplete="on"/>
                                            <button  onClick={ handleformAdd}> Add</button>   
                                    </form>

                            ):(
                                
                                <form className='form' onSubmit={handleEditFormSubmit}  >
                                            <input type="text" name="editTodo" 
                                            className="modal-input" 
                                            value={currentTodo.text}
                                            onChange={handleEditInputChange}
                                            placeholder=" edit Todo" />
                                            {/* <button onSubmit={handleEditFormSubmit}> add</button>  */}
                                          <button type="submit" > Update </button>
                                          <button className='cancel' onClick={()=> setIsEditing(false)}>Cancel</button>
                                        
                                </form>
                            )}
                    </div> 
            </div>
            
            
            </div>        
    </div>
)
}


export default ModalBox;

