import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ Country, to, total }) => {
  const [imageSrc, setImageSrc] = useState(null);

  const loadImage = async () => {
    try {
      const imageModule = await import(`../images/${Country}.png`);
      setImageSrc(imageModule.default);
    } catch (error) {
      const imageModule = await import('../images/default.png');
      setImageSrc(imageModule.default);
    }
  };

  useEffect(() => {
    loadImage();
  }, [Country]);

  return (
    <Link to={to}>
      <div className="cursor-pointer border-solid border-2 border-stone-400">
        {imageSrc && (
          <div className="relative p-1">
            <img src={imageSrc} alt={Country} className="pb-4 w-30 sm:w-48 h-30 sm:h-48" />
            <div className="absolute flex inset-0 bg-blue-800 opacity-50 justify-between items-end pr-1">
              <p className=" pl-1 m-0 text-base sm:text-lg lg:text-2xl text-white">{total}</p>
              <h1 className="z-0 text-white text-end text-base sm:text-lg lg:text-3xl leading-none font-bold">{Country}</h1>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

Country.propTypes = {
  Country: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

// export { loadImage };
export default Country;
