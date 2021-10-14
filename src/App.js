import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
// import Button from "./components/Button";

class App extends Component {
  state = {
    query: null,
    showModal: false,
    largeImg: "",
  };

  handleFormSubmit = (query) => {
    console.log(query);
    this.setState({ query });
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

  render() {
    const { query, showModal } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery query={query} onClick={this.handleClickImg} />

        {showModal && (
          <Modal largeImg={this.state.largeImg} onClick={this.toggleModal} />
        )}

        {/* <div> Покажи </div> */}
      </div>
    );
  }
}

export default App;
