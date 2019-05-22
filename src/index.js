import React from "react";
import ReactDOM from "react-dom";
import PassportForm from "./components/PassportForm.js";

import "./appstyles.scss";
import "./styles.css";

class App extends React.Component {
  componentDidMount() {
    fetch("https://my-json-server.typicode.com/typicode/demo/comments")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <PassportForm />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
