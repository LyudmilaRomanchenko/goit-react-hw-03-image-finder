// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
/////////////////////
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
//////////////////////

const API_KEY = "23052937-32fb9bd6f4b84b12682be3748";
const page = 1;
// const searchQuery = '';
// const BASE_URL = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
const BASE_URL = `https://pixabay.com/api`;

class App extends Component {
  state = {
    query: null,
    data: null,
  };
  componentDidMount() {
    const url = `${BASE_URL}/?q=${this.state.query}&page==${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    if (this.state.query) {
      fetch(url)
        .then((response) => response.json())
        .then(({ hits }) => {
          console.log(hits);
          this.setState({ data: hits });
        });
    }
  }

  handleClickImg() {
    console.log("Modal");
  }

  handleFormSubmit = (query) => {
    console.log(query);
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.data && (
          <ImageGallery
            data={this.state.data}
            handleClickImg={this.handleClickImg}
          />
        )}
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
        <Button />

        {/* <div> Покажи </div> */}
      </div>
    );
  }
}

export default App;
