const tasks = ["Buy milk", "Walk dog", "Study React"];

const UniqueKeys = () => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={task} onClick={() => console.log(task)}>
          {task}
        </li>
      ))}
    </ul>
  );
};

export default UniqueKeys;
