import React from "react";
import axios from "axios";
import BookSearch from "./BookSearch";

const apiKey = "";

class App extends React.Component {
  onSearchSubmit(term, price, printType) {
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: { q: term, key: apiKey, filter: price, printType: printType }
      })
      .then(response => {
        console.log(response.data.items);
      });
  }

  render() {
    return (
      <div>
        <BookSearch onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
