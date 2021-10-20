import React from "react";
import s from "./Spinner.module.css";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
function Spinner() {
  return (
    <Loader
      className={s.Loader}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}

export default Spinner;
