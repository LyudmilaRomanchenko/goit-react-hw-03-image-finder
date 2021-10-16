import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
// import Button from "./components/Button";
//Лоадер
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const API_KEY = "23052937-32fb9bd6f4b84b12682be3748";
const BASE_URL = `https://pixabay.com/api`;

class App extends Component {
  state = {
    page: 1,
    query: null,
    data: [],
    showModal: false,
    largeImg: "",
    status: "idle",
    // error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    const url = `${BASE_URL}/?q=${nextQuery}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    if (prevQuery !== nextQuery) {
      this.resetPage();
      // this.setState({ status: "pending" });
      console.log(this.state.page);

      if (nextPage === 1) {
        this.setState({ status: "pending" });
        fetch(url)
          .then((response) => response.json())
          .then(({ hits }) => {
            this.setState({ data: hits, status: "resolved" });
          });
        // .catch((error) =>  this.setState({ error }));
      }

      return;
    }

    if (prevPage !== nextPage) {
      this.setState({ status: "pending" });
      console.log(this.state.page);

      fetch(url)
        .then((response) => response.json())
        .then(({ hits }) => {
          // console.log(hits);
          this.setState((prevState) => ({
            data: [...prevState.data, ...hits],
            status: "resolved",
          }));
        });
      // .catch((error) => this.setState({ error }));

      return;
    }
  }

  // Сброс страницы в 1
  resetPage = () => {
    this.setState({ page: 1, data: [] });
  };

  // Запрос пользователя по поиску
  handleFormSubmit = (query) => {
    // console.log(query);
    this.setState({ query });
  };

  // Кнопка показать еще
  handleButtonLoadMore = () => {
    console.log("Кнопка показать болше");
    // console.log(this.state.page);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    this.setState(({ page }) => ({
      page: page + 1,
    }));
    // console.log(this.state.page);
  };

  // По клику на картинку открывается модалка с большим изображением
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
    const { data, status, showModal } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />

        {status === "idle" && <h2>Enter your request.</h2>}

        {status === "pending" && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}

        {status === "resolved" && (
          <ImageGallery
            data={data}
            handleClickImg={this.handleClickImg}
            handleButtonLoadMore={this.handleButtonLoadMore}
          />
        )}

        {showModal && (
          <Modal largeImg={this.state.largeImg} onClick={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;

/////////////////////////////////////////////////////////////////////////

// import "./App.css";
// import { Component } from "react";
// import Searchbar from "./components/Searchbar";
// import ImageGallery from "./components/ImageGallery";
// import Modal from "./components/Modal";
// // import Button from "./components/Button";

// class App extends Component {
//   state = {
//     page: "",
//     query: null,
//     showModal: false,
//     largeImg: "",
//   };

//   handleFormSubmit = (query, page) => {
//     console.log(query, page);
//     this.setState({ query, page });
//   };

//   handleClickImg = (e) => {
//     // console.log(this.state.largeImg);
//     const imgForModal = e.currentTarget.alt;
//     console.log(imgForModal);
//     this.setState({ showModal: true, largeImg: imgForModal });
//     // console.log(e.currentTarget.alt);
//     console.log(this.state.largeImg);
//     console.log("Modal");
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   ////////////////
//   // handleButtonLoadMore = () => {
//   //   console.log("Кнопка показать болше");

//   //   this.setState((prevState) => ({
//   //     page: prevState.page + 1,
//   //   }));
//   //   console.log(this.state.page);
//   // };
//   ///////////

//   render() {
//     const { query, page, showModal } = this.state;

//     return (
//       <div className="App">
//         <Searchbar onSubmit={this.handleFormSubmit} />

//         <ImageGallery
//           query={query}
//           page={page}
//           onClick={this.handleClickImg}
//           // handleButtonLoadMore={this.handleButtonLoadMore}
//         />

//         {showModal && (
//           <Modal largeImg={this.state.largeImg} onClick={this.toggleModal} />
//         )}
//       </div>
//     );
//   }
// }

// export default App;
