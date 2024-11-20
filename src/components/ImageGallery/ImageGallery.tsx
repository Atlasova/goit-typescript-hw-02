import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

type ImageData = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

type Props = {
  images: ImageData[];
  handleOpenModal: (url: string) => void;
};

const ImageGallery = ({ images, handleOpenModal }: Props) => {
  return (
    <ul className={css.imagesContainer}>
      {images.map(image => {
        return (
          <li key={image.id} className={css.imagesItem}>
            <ImageCard imageData={image} handleOpenModal={handleOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
