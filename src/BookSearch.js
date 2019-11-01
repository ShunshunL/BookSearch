import React from "react";
import Filter from "./Filter";

class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "", price: "ebooks", printType: "all" };
    this.changePrice = this.changePrice;
    this.changePrintType = this.changePrintType;
  }

  changePrice = price => {
    this.setState({ price });
  };

  changePrintType = printType => {
    this.setState({ printType });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(
      this.state.term,
      this.state.price,
      this.state.printType
    );
  };

  render() {
    return (
      <div className="header">
        <h1>Google Book Search</h1>
        <form onSubmit={this.onFormSubmit}>
          Search:{" "}
          <input
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
          <button type="submit">Search</button>
        </form>
        <Filter price={this.changePrice} printType={this.changePrintType} />
      </div>
    );
  }
}

export default BookSearch;
