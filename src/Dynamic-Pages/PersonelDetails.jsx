import React, { useState, useEffect, useCallback } from "react";

import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Styles from "../Styles/Dynamic-Page-Styles/PersonelDetails.module.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import NumbersIcon from "@mui/icons-material/Numbers";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import DataSlider from "../Components/DataSlider";

const PersonelDetails = () => {
  const { id } = useParams();

  const [details, setDetials] = useState({});

  const url = `https://random-data-api.com/api/v2/users?${id}&is_xml=true`;

  const getPersonelData = useCallback(() => {
    axios.get(url).then((result) => {
      setDetials(result.data);
      console.table(result.data);
    });
  }, [url]);

  useEffect(() => {
    getPersonelData();
  }, [getPersonelData]);

  return (
    <div className={Styles.Details_Page}>
      <Link to={"/"}>
        <ArrowBackIcon
          sx={{ color: "white", fontSize: 30 }}
          className={Styles.Return_Arrow}
        />
      </Link>
      <div className={Styles.Header}>
        <div className={Styles.Header_Image_Container}>
          <img src={details.avatar} alt="" className={Styles.Header_Image} />
        </div>
        <div className={Styles.Mini_Logo__Name_Box}>
          <div className={Styles.Logo_Container}>
            <img src={details.avatar} alt="" className={Styles.Logo} />
          </div>

          <h3 className={Styles.Large_Text}>
            {details.first_name}
            &nbsp;
            {details?.last_name}
          </h3>

          <p className={Styles.Small_Text}>{details?.username}</p>
        </div>
      </div>

      <div className={Styles.Body}>
        <div className={Styles.Social_Icons_Container}>
          <div className={Styles.Social_Icon}>
            <a href={"https://github.com/Dev-Rook"} rel="noreferrer" target={"_blank"}>
              <GitHubIcon sx={{ color: "white", fontSize: 30 }} />
            </a>
          </div>
          <div className={Styles.Social_Icon}>
            <a href="https://www.linkedin.com/in/dev-rook/"  rel="noreferrer" target={"_blank"}>
              <LinkedInIcon sx={{ color: "#70b5f9", fontSize: 30 }} />
            </a>
          </div>
          <div className={Styles.Social_Icon}>
            <a href="https://devrook.vercel.app/"  rel="noreferrer" target={"_blank"}>
              <LanguageIcon sx={{ color: "#e3b261", fontSize: 30 }} />
            </a>
          </div>
        </div>
        <div className={Styles.Information_Box}>
          <p className={Styles.Intro_Text}>
            Hello there! My name is {details?.first_name}. I am a{" "}
            {details?.employment?.title} with my skill being{" "}
            {details?.employment?.key_skill}. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptatibus amet aspernatur deleniti
            praesentium, ea optio veniam ratione dolor quo? Exercitationem?
          </p>

          <div className={Styles.Info_Icon_Container}>
            <div className={Styles.Info_Item}>
              <MapIcon sx={{ color: "white", fontSize: 30 }} />
              <p>{details?.address?.state}</p>
            </div>
            <div className={Styles.Info_Item}>
              <LocationCityIcon sx={{ color: "white", fontSize: 30 }} />
              <p>{details?.address?.city}</p>
            </div>
            <div className={Styles.Info_Item}>
              <AlternateEmailIcon sx={{ color: "white", fontSize: 30 }} />
              <p>{details?.email}</p>
            </div>
            <div className={Styles.Info_Item}>
              <NumbersIcon sx={{ color: "white", fontSize: 30 }} />
              <p>{details?.social_insurance_number}</p>
            </div>
            <div className={Styles.Info_Item}>
              <DateRangeIcon sx={{ color: "white", fontSize: 30 }} />
              <p>{details?.date_of_birth}</p>
            </div>
          </div>
        </div>

        <DataSlider />
      </div>
    </div>
  );
};

export default PersonelDetails;
