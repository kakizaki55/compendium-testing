import { render, screen } from '@testing-library/react';
import App from './App';

test('App has a loading state', async () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /nasa photo of the day directory/i,
  });

  const loading = screen.getByText(/loading/i);

  expect(loading).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  // await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
});

test('making sure it renders out 20 picures on page load in search inputs show up', async () => {
  render(<App />);
  const cardList = await window.document.getElementById('nasa-list');
  });
  expect(cardList.children.length).toEqual(20);
});
