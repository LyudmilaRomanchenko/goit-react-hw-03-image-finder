// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

const API_KEY = "23052937-32fb9bd6f4b84b12682be3748";
const page = 1;
// const searchQuery = '';
// const BASE_URL = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
const BASE_URL = `https://pixabay.com/api`;

class App extends Component {
  state = {
    query: null,
  };
  componentDidMount() {
    const url = `${BASE_URL}/?q=cat&page==${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    fetch(url)
      .then((response) => response.json())
      .then(({ hits }) => this.setState({ query: hits }));
  }

  render() {
    return (
      <div>
        <Searchbar />
        {this.state.query && <ImageGallery query={this.state.query} />}
        <div> Покажи </div>
      </div>
    );
  }
}

export default App;
