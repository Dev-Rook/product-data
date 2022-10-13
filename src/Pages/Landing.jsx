import React from "react";
import Styles from "../Styles/Page-Styles/Landing.module.css";

import DataSlider from "../Components/DataSlider";

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <DataSlider />
    </div>
  );
};

export default Landing;
