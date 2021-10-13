// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
// import Button from "./components/Button";

class App extends Component {
  state = {
    query: null,
  };

  // componentDidMount() {
  //   const url = `${BASE_URL}/?q=${this.state.query}&page==${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  //   if (this.state.query) {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then(({ hits }) => {
  //         console.log(hits);
  //         this.setState({ data: hits });
  //       });
  //   }
  // }

  handleFormSubmit = (query) => {
    console.log(query);
    this.setState({ query });
  };

  render() {
    const { query } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery query={query} />

        {/* <div> Покажи </div> */}
      </div>
    );
  }
}

export default App;
