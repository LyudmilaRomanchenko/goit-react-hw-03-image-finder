import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
// import Button from "./components/Button";

class App extends Component {
  state = {
    page: "",
    query: null,
    showModal: false,
    largeImg: "",
  };

  handleFormSubmit = (query, page) => {
    console.log(query, page);
    this.setState({ query, page });
  };

  handleClickImg = (e) => {
    // console.log(this.state.largeImg);
    const imgForModal = e.currentTarget.alt;
    console.log(imgForModal);
    this.setState({ showModal: true, largeImg: imgForModal });
    // console.log(e.currentTarget.alt);
    console.log(this.state.largeImg);
    console.log("Modal");
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  ////////////////
  // handleButtonLoadMore = () => {
  //   console.log("Кнопка показать болше");

  //   this.setState((prevState) => ({
  //     page: prevState.page + 1,
  //   }));
  //   console.log(this.state.page);
  // };
  ///////////

  render() {
    const { query, page, showModal } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery
          query={query}
          page={page}
          onClick={this.handleClickImg}
          // handleButtonLoadMore={this.handleButtonLoadMore}
        />

        {showModal && (
          <Modal largeImg={this.state.largeImg} onClick={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
