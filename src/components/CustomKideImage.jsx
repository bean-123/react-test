import { gap, maxWidth, padding, positions, width } from "@mui/system";
import kideImage from "/kideimage.png";
import imageTop from "/KIDE-kansikuvia.webp";

const CustomKideImage = () => {
  const styles = {
    kidecontainer: {
      display: "flex",
      width: "100%",
      height: "100%",
      position: "relative",
    },
    blankSpace: {
      backgroundColor: "white",
      width: "40%",
      height: "100%",
    },
    iconCanvas: {
      backgroundColor: "teal",
      width: "60%",
      height: "100%",
      backgroundImage: `url(${kideImage})`,
      backgroundSize: "33.333% 50%",
      backgroundRepeat: "repeat",
    },
    topImage: {
      position: "absolute",
      top: "50%",
      left: "1%",
      transform: "translateY(-50%)",
      width: "auto",
      height: "auto",
      objectFit: "contain",
      maxWidth: "50%",
      zIndex: 10,
    },
  };

  return (
    <div className="kidecontainer" style={styles.kidecontainer}>
      <div className="blank-space" style={styles.blankSpace}></div>
      <img src={imageTop} style={styles.topImage}></img>
      <div className="icon-canvas" style={styles.iconCanvas}></div>
    </div>
  );
};

export default CustomKideImage;
