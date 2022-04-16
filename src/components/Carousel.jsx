import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export default function Carousel(carouselObject) {
  
  const images = carouselObject.urlArray;

  return (
    <ImageGallery showPlayButton={false} showBullets={true} items={images} />
  );
}
