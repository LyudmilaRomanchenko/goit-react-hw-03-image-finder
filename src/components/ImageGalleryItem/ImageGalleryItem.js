import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ id, webformatURL }) {
  console.log(id, webformatURL);
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={s.ImageGalleryItemImage} />
    </li>
  );
}

export default ImageGalleryItem;
