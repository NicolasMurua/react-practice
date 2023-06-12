import Button from "./Button";

const TaskSingular = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.title} <Button text="X" color="red" onClick={onDelete} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default TaskSingular;
