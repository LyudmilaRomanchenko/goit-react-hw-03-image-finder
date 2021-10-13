import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";

function ImageGallery({ query }) {
  return (
    <ul className={s.ImageGallery}>
      {query.map(({ id, webformatURL }) => (
        <ImageGalleryItem id={id} webformatURL={webformatURL} />
      ))}
    </ul>
  );
}

export default ImageGallery;
