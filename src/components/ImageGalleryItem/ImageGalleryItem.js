import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ webformatURL, largeImageURL, onClick }) {
  // console.log(id, webformatURL);
  return (
    <img
      src={webformatURL}
      alt={largeImageURL}
      className={s.ImageGalleryItemImage}
      onClick={onClick}
    />
  );
}

export default ImageGalleryItem;

//  <li key={id} className={s.ImageGalleryItem}>
//    <img
//      src={webformatURL}
//      alt=""
//      className={s.ImageGalleryItemImage}
//      onClick={handleClickImg}
//    />
//  </li>;
