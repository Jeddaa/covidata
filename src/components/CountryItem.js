import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CountryItem = () => {
  const { country } = useParams();
  const { rawData } = useSelector((store) => store.data);
  const filtered = rawData.filter((item) => item.Country_Region
  === country);
  const newCase = filtered.reduce((total, item) => total + parseInt(item.Confirmed, 10), 0);
  return (
    <div className="flex flex-col mb-4 bg-neutral-400">
      <h2 className="text-black text-xl font-bold mb-2 px-2 pt-2">
        {country}
        :
        {` ${newCase} Cases`}
      </h2>
      <div className="">
        {rawData
          .filter((item) => item.Country_Region === country)
          .map((item) => (
            <div key={item.Lat} className="border-solid border-2 border-neutral-500">
              <div className="border px-2">
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
