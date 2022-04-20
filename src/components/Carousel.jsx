import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/Carousel.css";
import ImageGallery from "react-image-gallery";

export default function Carousel(carouselObject) {
  const images = carouselObject.urlArray;

  return (
    <div id="Carousel">
      <ImageGallery
        showPlayButton={false}
        showBullets={true}
        items={images}
      />
    </div>
  );
}
