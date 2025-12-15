import { useNavigate } from "react-router";
import styles from "./About.module.css";
import CustomKideImage from "./CustomKideImage";
import EmployeeDataGrid from "./EmployeeDataGrid";

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/"); // where u want to navigate to, or just define at the button if u have many buttons that lead to diff sites
  };

  return (
    <div className={styles.container}>
      <EmployeeDataGrid />
      <p className={styles.abouttext}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
      <div style={{ width: "100%", height: "500px", margin: "20px" }}>
        <CustomKideImage />
      </div>
      <button onClick={handleNavigate}>Return to home</button>
    </div>
  );
};

export default About;
