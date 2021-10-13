import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";

function ImageGallery({ data, handleClickImg }) {
  return (
    <ul className={s.ImageGallery}>
      {data.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          id={id}
          webformatURL={webformatURL}
          handleClickImg={handleClickImg}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
