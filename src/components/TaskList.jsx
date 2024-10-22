import React, { useState } from 'react'


const TaskList = () => {


    const [tasks, setTasks] = useState([
        { id: 1, text: 'Estudar BD' },
        { id: 2, text: 'Almoçar' },
        { id: 3, text: 'Beber água' },
    ])


    const removeTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks)
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => removeTask(task.id)} style={{ marginLeft: '10px' }}>
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList