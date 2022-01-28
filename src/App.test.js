import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

const data = [
  {
    date: '1999-01-01',
    explanation:
      'SO202-G23 is a colorful mess.  It is a collision between two galaxies taking place over hundreds of millions of years.  The representative colors give astronomers some idea of what is going on. Visible in this jumble is an  active nucleus spewing ultraviolet radiation which lights up surrounding gas (blue); galactic arms contorted by the gravity of the collision (green); a star forming complex left of center (blue); and dust (red).  In billions of years this mess might settle into a relatively normal looking galaxy.',
    hdurl: 'https://apod.nasa.gov/apod/image/9901/merger_vlt_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'ESO202-G23: Merging Galaxies',
    url: 'https://apod.nasa.gov/apod/image/9901/merger_vlt.jpg',
  },
  {
    date: '2002-08-03',
    explanation:
      'Tuning in to the center of our Milky Way galaxy, radio astronomers explore a complex, mysterious place. A premier high resolution view, this startlingly beautiful picture covers a 4x4 degree region around the galactic center. It was constructed from 1 meter wavelength radio data obtained by telescopes of the Very Large Array near Socorro, New Mexico, USA. The galactic center itself is at the edge of the extremely bright object labeled Sagittarius (Sgr) A, suspected of harboring a million solar mass black hole. Along the galactic plane which runs diagonally through the image are tortured clouds of gas energized by hot stars and bubble-shaped supernova remnants (SNRs) - hallmarks of a violent and energetic cosmic environment. But perhaps most intriguing are the arcs, threads, and filaments which abound in the scene. Their uncertain origins challenge present theories of the dynamics of the galactic center.',
    hdurl: 'https://apod.nasa.gov/apod/image/0208/gc_1meter_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Galactic Center - A Radio Mystery',
    url: 'https://apod.nasa.gov/apod/image/0208/gc_1meter.jpg',
  },
];

const server = setupServer(
  rest.get('https://api.nasa.gov/planetary/apod', (req, res, ctx) => {
    return res(ctx.json(data));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

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
