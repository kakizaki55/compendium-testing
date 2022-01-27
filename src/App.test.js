import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

test.skip('App has a loading state', async () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /nasa photo of the day directory/i,
  });

  const loading = screen.getByText(/loading/i);

  expect(loading).toBeInTheDocument();
  expect(heading).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i), { timeout: 5000 });
});

// test('making sure search boxes show up', async () => {
//   render(<App />);
//   await waitForElementToBeRemoved(await screen.findByText(/loading/i), { timeout: 5000 });

//   const startDate = await screen.findByText(/start date:/i);
//   const endDate = await screen.findByText(/end date:/i);

//   expect(startDate).toBeInTheDocument();
//   expect(endDate).toBeInTheDocument();
// });
