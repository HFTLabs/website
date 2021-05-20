import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Api(props) {
  const { id } = props.match.params;
  var file = require("../assets/json/" + id);
  file = JSON.stringify(file);
  console.log(JSON.stringify(file));
  window.scrollTo(0, 0);
  return <div>{file}</div>;
}

export default Api;
