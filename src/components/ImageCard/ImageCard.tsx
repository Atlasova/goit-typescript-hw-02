import css from './ImageCard.module.css';

type ImafeData = {
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

type Props = {
  imageData: ImageData;
  handleOpenModal: (url: string) => void;
};

const ImageCard = ({ imageData, handleOpenModal }: Props) => {
  return (
    <div className={css.imageCard}>
      <img
        src={imageData.urls.small}
        alt={imageData.description}
        onClick={() => {
          handleOpenModal(imageData.urls.regular);
        }}
      />
    </div>
  );
};

export default ImageCard;
