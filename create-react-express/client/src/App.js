import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Jumbotron from "./components/layout/Jumbotron";
import SearchForm from "./components/SearchForm";

class App extends Component {

  state = {
    bookTitle: ""
  };

  handleChange = event => {
    const { name } = event.target;

    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />

        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <SearchForm handleChange={this.handleChange} />
            </div>
          </div>
        </div>


      </div>

    );
  }
}

export default App;
