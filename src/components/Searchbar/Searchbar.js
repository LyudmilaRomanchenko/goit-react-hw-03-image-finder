import s from "./Searchbar.module.css";
import { Component } from "react";

class Searchbar extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    console.log(e.currentTarget.value);
    // console.log(this.state);

    this.setState({
      search: e.currentTarget.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { search } = this.state;
    console.log(search);
    this.props.onSubmit(search);
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
