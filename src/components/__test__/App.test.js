import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from '../../redux/store';
import App from '../../App';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('App', () => {
  it('renders the home page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the home page', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const linkElement = screen.getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalled();
  });
});
