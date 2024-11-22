import css from './LoadMoreBtn.module.css';
import { IoArrowRedoOutline } from 'react-icons/io5';

type Props = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: Props) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onClick}>
      Load more...
      <IoArrowRedoOutline />
    </button>
  );
};

export default LoadMoreBtn;
