import React, { useState } from 'react'
function ToDoList() {
    const [task, setTask] = useState(["Go To the Gym", "Take a Shower", "Take the BreakFast"]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {

        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setNewTask("");

        }
    }
    function deleteTask(index) {
        const updatedTasks = task.filter((_, i) => i !== index);    // Filter the list where index of deleted icon will not exist
        setTask(updatedTasks)

    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            addTask();
        }

    }
    function moveUp(index) {

        if (index > 0) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    function moveDown(index) {
        if (index < task.length - 1) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }

    }

    return (<>
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" id='tasksInput' value={newTask} onKeyPress={handleKeyPress} onChange={handleInputChange} placeholder='Enter the Task' />
                <button className='add-btn' onClick={addTask}>Add</button>
            </div>

            <ol className='ListContainer'>
                {task.map((tasks, index) =>
                    <li key={index}>
                        <span className='text'>{tasks}</span>
                        < button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
                        < button className='move-btn' onClick={() => moveUp(index)}>👆</button>
                        < button className='move-btn' onClick={() => moveDown(index)}>👇</button>


                    </li>)
                }
            </ol>
        </div >
    </>)
}

export default ToDoList