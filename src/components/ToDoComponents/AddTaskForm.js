import React from "react";

import './addAndRemove.css'

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
      <>
        <div className="content">
          <div className="input">
            <input 
              value={newTask}
              onChange={ (e) => setNewTask(e.target.value)}
              placeholder="چه کاری داری؟"
            />
          </div>
          <div className="buttons">
            <button
              onClick={addTask}
              className="btn add"
            >افزودن</button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
  export default AddTaskForm;