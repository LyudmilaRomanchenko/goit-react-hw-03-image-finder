import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";
// import Button from "../Button";
//Лоадер
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";

function ImageGallery({ data, handleClickImg }) {
  console.log(data);
  return (
    <div>
      <ul className={s.ImageGallery}>
        {data.map(({ id, webformatURL, largeImageURL }) => (
          <li key={id} className={s.ImageGalleryItem}>
            <ImageGalleryItem
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={handleClickImg}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

ImageGallery.prototype = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ),
  handleClickImg: PropTypes.func.isRequired,
};

export default ImageGallery;

///////////////////////////////////////////////////////////////////////////

// import { Component } from "react";
// import PropTypes from "prop-types";
// import s from "./ImageGallery.module.css";
// import ImageGalleryItem from "../ImageGalleryItem";
// import Button from "../Button";
// //Лоадер
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";

// const API_KEY = "23052937-32fb9bd6f4b84b12682be3748";
// const BASE_URL = `https://pixabay.com/api`;

// class ImageGallery extends Component {
//   static defaultProps = {
//     query: PropTypes.string.isRequired,
//     page: PropTypes.number.isRequired,
//     onClick: PropTypes.func.isRequired,
//   };
//   state = {
//     page: 1,
//     data: [],

//     // error: null,
//     status: "idle",
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevProps.query;
//     const nextQuery = this.props.query;

//     // const prevPage = prevProps.page;
//     // const nextPage = this.props.page;

//     const prevPage = prevState.page;
//     const nextPage = this.state.page;
//     console.log(prevPage);
//     console.log(nextPage);
//     console.log(this.props.page);

//     const url = `${BASE_URL}/?q=${nextQuery}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//     // const url2 = `${BASE_URL}/?q=${nextQuery}&page=${this.props.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

//     if (prevQuery !== nextQuery) {
//       this.setState({ page: this.props.page, status: "pending" });

//       fetch(url)
//         .then((response) => response.json())
//         .then(({ hits }) => {
//           console.log(hits);
//           this.setState({ data: hits, status: "resolved" });
//         })
//         .catch((error) => this.setState({ error }));
//       return;
//     }

//     if (prevPage !== nextPage && prevQuery === nextQuery) {
//       this.setState({ page: nextPage, status: "pending" });

//       fetch(url)
//         .then((response) => response.json())
//         .then(({ hits }) => {
//           console.log(hits);
//           this.setState((prevState) => ({
//             data: [...prevState.data, ...hits],
//             status: "resolved",
//           }));
//         })
//         .catch((error) => this.setState({ error }));
//       return;
//     }
//   }

//   handleButtonLoadMore = () => {
//     console.log("Кнопка показать болше");
//     console.log(this.state.page);

//     this.setState(({ page }) => ({
//       page: page + 1,
//     }));
//     console.log(this.state.page);
//   };
//   //////////////

//   // handleClickImg = (e) => {
//   //   console.log(e.currentTarget.alt);
//   //   console.log("Modal");
//   // };

//   render() {
//     /////////////////////
//     // window.scrollTo({
//     //   top: document.documentElement.scrollHeight,
//     //   behavior: "smooth",
//     // });
//     /////////////////
//     const { data, status } = this.state;

//     console.log(data.length);

//     if (status === "idle") {
//       return <h2>Enter your request.</h2>;
//     }

//     if (status === "pending") {
//       return (
//         <Loader
//           type="Puff"
//           color="#00BFFF"
//           height={100}
//           width={100}
//           timeout={3000} //3 secs
//         />
//       );
//     }

//     if (status === "resolved") {
//       return (
//         <div>
//           <ul className={s.ImageGallery}>
//             {data.map(({ id, webformatURL, largeImageURL }) => (
//               <li key={id} className={s.ImageGalleryItem}>
//                 <ImageGalleryItem
//                   webformatURL={webformatURL}
//                   largeImageURL={largeImageURL}
//                   onClick={this.props.onClick}
//                 />
//               </li>
//             ))}
//           </ul>

//           {data.length >= 12 && (
//             <Button handleButtonLoadMore={this.handleButtonLoadMore} />
//           )}
//         </div>
//       );
//     }
//   }
// }

// export default ImageGallery;
