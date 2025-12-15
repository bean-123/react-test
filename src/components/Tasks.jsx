import Charactercount from "./Charactercount";
import Loader from "./Loader";
import Parent from "./ParentChildProp";
import Togglebutton from "./Togglebutton";
import UniqueKeys from "./UniqueKeys";

const Tasks = () => {
  return (
    <>
      <h2>1. Toggle Button task</h2>
      <Togglebutton />
      <h2>2. Character count task</h2>
      <Charactercount />
      <h2>3. List rendering</h2>
      <UniqueKeys />
      <h2>4. Parent-Child task</h2>
      <Parent />
      <h2>Conditional rendering based on state</h2>
      <Loader />
    </>
  );
};

export default Tasks;
