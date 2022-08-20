import React from "react";

const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return(
      <>
        <div className="content">
          <div className="input">
            <input 
              value={ updateData && updateData.title }
              onChange={ (e) => changeTask(e)}
            />
          </div>
          <div className="buttons">
            <button
              onClick={updateTask}
              className="btn update"
            >بروزرسانی</button>
            <button
              onClick={cancelUpdate}
              className="btn cancel"
            >لفو</button>
          </div>
        </div>
        <br />  
      </>
    )
  }
  
  export default UpdateForm;