import css from "./PhotoGallery.module.css";
import PhotoCard from "../PhotoCard/PhotoCard";
const PhotoGallery = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <PhotoCard small={item.urls.small} description={item.description} />
        </li>
      ))}
    </ul>
  );
};
export default PhotoGallery;
