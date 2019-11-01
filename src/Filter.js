import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div>
        Price:
        <select onChange={e => this.props.price(e.target.value)}>
          <option value="ebooks">All</option>
          <option value="free-ebooks">Free</option>
          <option value="paid-ebooks">Paid</option>
        </select>
        Print type:
        <select onChange={e => this.props.printType(e.target.value)}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </div>
    );
  }
}

export default Filter;
