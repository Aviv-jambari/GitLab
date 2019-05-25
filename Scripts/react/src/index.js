import React, { Component } from 'react'
import ReactDom from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Routes from "./components/routing/routes";

ReactDom.render(<Routes /> , document.getElementById("app"))