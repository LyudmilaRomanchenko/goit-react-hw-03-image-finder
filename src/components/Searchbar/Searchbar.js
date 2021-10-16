import { Component } from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  static defaultProps = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    search: "",
  };

  // Контролируем изминения запроса в инпуте и делаем нечуствительным к регистру (приводим к нижнему регистру)
  handleChange = (e) => {
    this.setState({
      search: e.currentTarget.value.toLowerCase(),
    });
  };

  // Сабмит формы
  handleSubmit = (e) => {
    e.preventDefault();

    const { search } = this.state;
    console.log(search);

    // Если пустая строка запрос не передаем
    if (search.trim() === "") {
      console.log("Пустая строка");
      return;
    }

    // Передаем результат запроса в App.js
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
