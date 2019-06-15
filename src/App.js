import React from "react";
import Countdown from "./components/countdown/countdown";
import Form from "./components/form/form";
import Footer from "./components/footer/footer";
import "./App.css";

export default function App() {
  return (
    <div>
      <Countdown />
      <Form />
      <Footer />
    </div>
  );
}
