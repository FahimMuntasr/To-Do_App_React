import React, {useState} from 'react';

function List(){

    const [task, setTask] = useState() 

    function handleTaskWrite(e){
        setTask(e.target.value);
    }

    function handleTaskAdd(){
        
    }

    return (<>
                <h1>To Do List</h1>
                <div className="input-bar">
                    <input type="text" placeholder="Add your task..." value={task} onChange={handleTaskWrite}/>
                    <button type="button" onClick={handleTaskAdd}>Add</button>
                </div>
                <div className="list-box">
                    <div className='task-box'>
                        <fieldset>
                            <p>{task}</p>
                            <div className='buttons'>
                                <button ></button>
                                <button ></button>
                            </div>
                        </fieldset>
                    </div>
                    <div className='nav-bar'>
                        <p>Tasks left {}</p>
                        <button type='radio'>All</button>
                        <button type='radio'>Active</button>
                        <button type='radio'>Done</button>
                        <button type='button'>Clear Done</button>
                    </div>
                </div>
            </>)
}
export default List;