import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Home";
import Players from "../Styles/Store.css";

function Store() {
  return (
    <div className="home-div">
      <iframe
        src="https://player.beatstars.com/?storeId=133113"
        width="100%"
        height="800"
      ></iframe>

      <div>
        <Link to="/home">Go Back</Link>
      </div>
    </div>
  );
}

export default Store;
