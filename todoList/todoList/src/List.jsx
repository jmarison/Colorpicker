import { useState } from 'react'

function List(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTasks] = useState("");

  
    function handleInputChange(event){
            setNewTasks(event.target.value);
    }
  
    function addTask(){
      if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTasks("");
      }
    }
  
    function deleteTask(index){
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
  
    function moveTaskUp(index){
      if(index > 0){
          const updatedTasks = [...tasks];
          [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
          setTasks(updatedTasks);
      }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    
    
    return (
      <>
        <div className="toDoList">
          <h1 className="title">To Do List</h1>
  
          <div>
              <input
                  type="text"
                  placeholder="Enter an upcoming task..."
                  value={newTask}
                  onChange={handleInputChange}/>
              <button
                className="addButton"
                onClick={addTask}>
                Add
              </button>
          </div>

          <ol className="orderedList">
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                    className="delete-button"
                    onClick={() =>deleteTask(index)}>
                    Delete
                    </button>

                    <button
                    className="moveup-button"
                    onClick={() =>moveTaskUp(index)}>
                    Raise Task Priority
                    </button>

                    <button
                    className="movedown-button"
                    onClick={() =>moveTaskDown(index)}>
                    Lower Task Priority
                    </button>
                </li>
            )}

          </ol>
        </div>
      </>
    )
  }

export default List