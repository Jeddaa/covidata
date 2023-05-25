import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

const CountryItem = () => {
  const { country } = useParams();
  const { rawData } = useSelector((store) => store.data);
  const filtered = rawData.filter((item) => item.Country_Region
  === country);
  const newCase = filtered.reduce((total, item) => total + parseInt(item.Confirmed, 10), 0);

  const [imageSrc, setImageSrc] = useState(null);

  const loadImage = async () => {
    try {
      const imageModule = await import(`../images/${country}.png`);
      setImageSrc(imageModule.default);
    } catch (error) {
      const imageModule = await import('../images/default.png');
      setImageSrc(imageModule.default);
    }
  };

  useEffect(() => {
    loadImage();
  }, [country]);

  return (
    <div className="flex flex-col mb-4 bg-blue-900">
      <div className="relative flex justify-between items-end">
        <img src={imageSrc} alt={country} className="p-1 sm:pl-5 w-20 sm:w-60 h-20 sm:h-48" />
        <div className="absolute inset-0 bg-blue-800 opacity-50 pr-1" />
        <h2 className="text-white z-0 text-xl text-end font-bold mb-2 px-2 pt-2">
          {country}
          :
          {` ${newCase} Cases`}
        </h2>
      </div>

      <div className="">
        {rawData
          .filter((item) => item.Country_Region === country)
          .map((item) => (
            <div key={item.Lat} className="">
              <div className="border-solid border-2 border-blue-800 text-white px-2">
                {item.Province_State && (
                  <h4 className="mt-1 font-bold">
                    Province state:
                    {` ${item.Province_State}`}
                  </h4>
                )}

                <p>
                  Confirmed Cases:
                  {` ${item.Confirmed}`}
                </p>
                <p>
                  Confirmed Deaths:
                  {` ${item.Deaths}`}
                </p>
                <p>
                  Case Fatality Ratio:
                  {` ${Number(item.Case_Fatality_Ratio).toFixed(2)}`}
                </p>
                <p>
                  Last Updated:
                  {` ${item.Last_Update}`}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CountryItem;
