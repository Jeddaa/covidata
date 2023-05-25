import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/dataSlice';
import Country from './Country';
import Worldmap from '../images/worldmap1.png';

const CountryList = () => {
  const {
    rawData, covidData, globalData, isLoading, isError,
  } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="mx-auto my-0">
      {isError && <p className="m-3">{isError}</p>}
      {isLoading ? (
        <h2 className="m-3 text-2xl">Loading...</h2>
      ) : (
        <div className="p-2">
          {globalData && (
            <div className="w-full flex my-0 mx-auto">
              <div className="w-1/2">
                <img src={Worldmap} alt="World map" />
              </div>
              <div className="w-1/2 flex flex-col justify-center">
                <h2 data-testid="header-1" className="m-0 p-0 text-2xl font-bold">Global Confirmed Cases</h2>
                <p className="m-0 p-0">{globalData.confirmed}</p>
              </div>
            </div>
          )}
          {covidData && (
            <div>
              <h2 className="my-2 text-2xl font-bold">STATS BY COUNTRY</h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {covidData.map((country) => {
                  const filtered = rawData.filter((item) => item.Country_Region === country);
                  const newCase = filtered.reduce((total,
                    item) => total + parseInt(item.Confirmed, 10), 0);
                  return <Country key={country} Country={country} to={country} total={newCase} />;
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryList;
