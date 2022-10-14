import React from "react";
import Styles from "../Styles/Page-Styles/Landing.module.css";

import DataSlider from "../Components/DataSlider";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import GitHubIcon from "@mui/icons-material/GitHub";

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <div className={Styles.Page_Header}>
        Feel free to add to this project{" "}
        <ArrowRightIcon sx={{ color: "white", fontSize: 30 }} />
        <a
          href={"https://github.com/Dev-Rook/product-data"}
          rel="noreferrer"
          target={"_blank"}
        >
          <GitHubIcon sx={{ color: "#2c7a7b", fontSize: 30 }} />
        </a>
      </div>
      <DataSlider />
    </div>
  );
};

export default Landing;
