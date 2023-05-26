import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from '../../redux/store';
import CountryList from '../CountryList';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

const mockApiResponse = {
  summaryStats: { global: { confirmed: 676570149, recovered: null, deaths: 6881804 } },
  rawData: [
    {
      FIPS: '',
      Admin2: '',
      Province_State: '',
      Country_Region: 'Afghanistan',
      Last_Update: '2023-03-10 04:21:03',
      Lat: '33.93911',
      Long_: '67.709953',
      Confirmed: '209451',
      Deaths: '7896',
      Recovered: '',
      Active: '',
      Combined_Key: 'Afghanistan',
      Incident_Rate: '538.0424508714615',
      Case_Fatality_Ratio: '3.76985547932452',
    },
    {
      FIPS: '',
      Admin2: '',
      Province_State: '',
      Country_Region: 'Albania',
      Last_Update: '2023-03-10 04:21:03',
      Lat: '41.1533',
      Long_: '20.1683',
      Confirmed: '334457',
      Deaths: '3598',
      Recovered: '',
      Active: '',
      Combined_Key: 'Albania',
      Incident_Rate: '11621.96817012996',
      Case_Fatality_Ratio: '1.075773567304616',
    }],
};

describe('App', () => {
  test('renders the home page', async () => {
    axios.get.mockResolvedValue({ data: mockApiResponse });
    await act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CountryList />
          </Provider>
        </BrowserRouter>,
      );
    });

    const linkElement = screen.getByText(/Global Confirmed Cases/i);
    expect(linkElement).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalled();
  });
});
