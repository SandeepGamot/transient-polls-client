import React from "react";
import "./styles.css";
import Mock from "./Mock";

export default function App() {
  const dev = true;

  return <div>{dev ? <Mock /> : <div></div>}</div>;
}
