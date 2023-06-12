import TaskSingular from "./TaskSingular";
const Tasks = (props) => {
  return (
    <>
      {props.tasks.map((task) => (
        <TaskSingular
          key={task.id}
          task={task}
          onDelete={() => props.onDelete(task.id)}
          onToggle={props.onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
