import { Component } from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  static defaultProps = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    search: "",
    page: 1,
  };

  handleChange = (e) => {
    console.log(e.currentTarget.value);

    this.setState({
      search: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { search, page } = this.state;
    console.log(search);

    if (search.trim() === "") {
      console.log("Пустая строка");
      return;
    }

    this.props.onSubmit(search, page);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            name="search"
            value={this.state.search}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

// Props
