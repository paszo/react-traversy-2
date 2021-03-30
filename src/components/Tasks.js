import Task from './Task';

const Tasks = ({tasks, onToggle, onDelete}) => {
    return (
        <div className="tasks">
            {
                tasks.length > 0 ?
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            task={task}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    )      :
                    <h2>
                        No tasks to show
                    </h2>

            }
        </div>
    )
};

export default Tasks;