import React, { Component } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class Searchbar extends Component {
  state = {
    query: "",
  };

  handleQChange = ({ target }) => {
    this.setState({ query: target.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.query.trim() === "") {
      toast.error("Введите ключевое слово для поиска", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ searcText: "" });
  };

  render() {
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="on"
              autoFocus
              placeholder="Search images and photos"
              name="searcText"
              value={this.state.query}
              onChange={this.handleQChange}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default Searchbar;