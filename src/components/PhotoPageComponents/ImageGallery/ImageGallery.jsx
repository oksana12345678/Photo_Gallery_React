import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, isOpen }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.listItem} key={image.id}>
          <ImageCard
            small={image.urls.small}
            description={image.description}
            onClick={() => isOpen(image.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
}
