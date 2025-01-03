import { MagnifyingGlass } from 'react-loader-spinner';
import css from './Loader.module.css';
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      render(
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
      )
    </div>
  );
};

export default Loader;
