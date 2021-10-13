import { Component } from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";

/////////////////////
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
//////////////////////

const API_KEY = "23052937-32fb9bd6f4b84b12682be3748";
// let page = 1;
// const searchQuery = '';
// const BASE_URL = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
const BASE_URL = `https://pixabay.com/api`;

class ImageGallery extends Component {
  state = {
    data: null,
    page: 1,
    // error: null,
    status: "idle",
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const page = this.state.page;

    const url = `${BASE_URL}/?q=${nextQuery}&page==${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    if (prevQuery !== nextQuery) {
      this.setState({ status: "pending" });
      // this.cccccc();
      fetch(url)
        .then((response) => response.json())
        .then(({ hits }) => {
          console.log(hits);
          this.setState({ data: hits, status: "resolved" });
        })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  // cccccc = () => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then(({ hits }) => {
  //       console.log(hits);
  //       this.setState({ data: hits, status: "resolved" });
  //     });
  // }

  handleButtonLoadMore = () => {
    console.log("Кнопка показать болше");
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    console.log(this.state.page);
  };

  handleClickImg = () => {
    console.log("Modal");
  };

  render() {
    const { data, status } = this.state;

    if (status === "idle") {
      return <h1>Пусто</h1>;
    }

    if (status === "pending") {
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    }

    if (status === "resolved") {
      return (
        <div>
          <ul className={s.ImageGallery}>
            {data.map(({ id, webformatURL }) => (
              <ImageGalleryItem
                id={id}
                webformatURL={webformatURL}
                handleClickImg={this.handleClickImg}
              />
            ))}
          </ul>
          <Button handleButtonLoadMore={this.handleButtonLoadMore} />
        </div>
      );
    }

    // return (
    //   <div>
    //     {/* {this.state.error && <h1>Ошибка</h1>} */}
    //     <ul className={s.ImageGallery}>
    //       {data &&
    //         data.map(({ id, webformatURL }) => (
    //           <ImageGalleryItem
    //             id={id}
    //             webformatURL={webformatURL}
    //             handleClickImg={this.handleClickImg}
    //           />
    //         ))}
    //     </ul>
    //     {this.state.loading && (
    //       <Loader
    //         type="Puff"
    //         color="#00BFFF"
    //         height={100}
    //         width={100}
    //         timeout={3000} //3 secs
    //       />
    //     )}
    //   </div>
    // );
  }
}

// function ImageGallery({ query, handleClickImg }) {
//   return (
//     <ul className={s.ImageGallery}>
//       {data.map(({ id, webformatURL }) => (
//         <ImageGalleryItem
//           id={id}
//           webformatURL={webformatURL}
//           handleClickImg={handleClickImg}
//         />
//       ))}
//     </ul>
//   );
// }

export default ImageGallery;
