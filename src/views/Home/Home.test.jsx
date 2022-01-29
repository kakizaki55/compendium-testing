import { render, screen, waitForElementToBeRemoved, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App from '../../App';

const data = [
  {
    date: '1999-01-01',
    explanation:
      'asldkjfaiweufawiefbaweiugfaweibf npm testSO202-G23 is a colorful mess.  It is a collision between two galaxies taking place over hundreds of millions of years.  The representative colors give astronomers some idea of what is going on. Visible in this jumble is an  active nucleus spewing ultraviolet radiation which lights up surrounding gas (blue); galactic arms contorted by the gravity of the collision (green); a star forming complex left of center (blue); and dust (red).  In billions of years this mess might settle into a relatively normal looking galaxy.',
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

test('doing test to see if the data coming back actually renders picture cards and search boxes', async () => {
  render(<App />);

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  const startDateBox = screen.getByLabelText(/start date:/i);
  const endDateBox = screen.getByLabelText(/end date:/i);
  const button = screen.getByRole('button');

  expect(startDateBox).toBeInTheDocument();
  expect(endDateBox).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  const listOfPictures = screen.getByRole('list', {
    name: /nasa-list/i,
  });

  expect(listOfPictures.children.length).toEqual(2);
});

const searchData = [
  {
    copyright: 'Petr Horalek',
    date: '2021-01-01',
    explanation:
      "The South Celestial Pole is easy to spot in star trail images of the southern sky. The extension of Earth's axis of rotation to the south, it's at the center of all the southern star trail arcs. In this starry panorama streching about 60 degrees across deep southern skies the South Celestial Pole is somewhere near the middle though, flanked by bright galaxies and southern celestial gems. Across the top of the frame are the stars and nebulae along the plane of our own Milky Way Galaxy. Gamma Crucis, a yellowish giant star heads the Southern Cross near top center, with the dark expanse of the Coalsack nebula tucked under the cross arm on the left. Eta Carinae and the reddish glow of the Great Carina Nebula shine along the galactic plane near the right edge. At the bottom are the Large and Small Magellanic clouds, external galaxies in their own right and satellites of the mighty Milky Way. A line from Gamma Crucis through the blue star at the bottom of the southern cross, Alpha Crucis, points toward the South Celestial Pole, but where exactly is it? Just look for south pole star Sigma Octantis. Analog to Polaris the north pole star, Sigma Octantis is little over one degree fom the the South Celestial pole.",
    hdurl: 'https://apod.nasa.gov/apod/image/2101/2020_12_16_Kujal_Jizni_Pol_1500px-3.png',
    media_type: 'image',
    service_version: 'v1',
    title: 'Galaxies and the South Celestial Pole',
    url: 'https://apod.nasa.gov/apod/image/2101/2020_12_16_Kujal_Jizni_Pol_1500px-3.jpg',
  },
  {
    copyright: 'Mike Smolinsky',
    date: '2021-01-02',
    explanation:
      "In the mid 19th century, one of the first photographic technologies used to record the lunar surface was the wet-plate collodion process, notably employed by British astronomer Warren De la Rue. To capture an image, a thick, transparent mixture was used to coat a glass plate, sensitized with silver nitrate, exposed at the telescope, and then developed to create a negative image on the plate. To maintain photographic sensitivity, the entire process, from coating to exposure to developing, had to be completed before the plate dried, in a span of about 10 to 15 minutes. This modern version of a wet-plate collodion image celebrates lunar photography's early days, reproducing the process using modern chemicals to coat a glass plate from a 21st century hardware store. Captured last November 28 with an 8x10 view camera and backyard telescope, it faithfully records large craters, bright rays, and dark, smooth mare of the waxing gibbous Moon. Subsequently digitized, the image on the plate was 8.5 centimeters in diameter and exposed while tracking for 2 minutes. The wet plate's effective photographic sensitivity was about ISO 1.  In your smart phone, the camera sensor probably has a photographic sensitivity range of ISO 100 to 6400 (and needs to be kept dry ...).",
    hdurl: 'https://apod.nasa.gov/apod/image/2101/WetCollodionLunar112820SMO.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: '21st Century Wet Collodion Moon',
    url: 'https://apod.nasa.gov/apod/image/2101/WetCollodionLunar112820SMO_1024.jpg',
  },
  {
    copyright: 'Hallgrimur P. Helgason Rollover Annotation: Judy Schmidt',
    date: '2021-01-03',
    explanation:
      "All of the other aurora watchers had gone home. By 3:30 am in Iceland, on a quiet September night, much of that night's auroras had died down. Suddenly, unexpectedly, a new burst of particles streamed down from space, lighting up the Earth's atmosphere once again. This time, surprisingly, pareidoliacally, the night lit up with an  amazing shape reminiscent of a giant phoenix. With camera equipment at the ready, two quick sky images were taken, followed immediately by a third of the land.  The mountain in the background is Helgafell, while the small foreground river is called Kaldá, both located about 30 kilometers north of Iceland's capital Reykjavík. Seasoned skywatchers will note that just above the mountain, toward the left, is the constellation of Orion, while the Pleiades star cluster is also visible just above the frame center.  The 2016 aurora, which lasted only a minute and was soon gone forever --  would possibly be dismissed as an fanciful fable -- were it not captured in the featured, digitally-composed, image mosaic.    Almost Hyperspace: Random APOD Generator",
    hdurl: 'https://apod.nasa.gov/apod/image/2101/PhoenixAurora_Helgason_3130.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'A Phoenix Aurora over Iceland',
    url: 'https://apod.nasa.gov/apod/image/2101/PhoenixAurora_Helgason_960.jpg',
  },
];
test('making sure the correct Api response comes back when using the search feature', async () => {
  render(<App />);
  server.use(
    rest.get('https://api.nasa.gov/planetary/apod', (req, res, ctx) => {
      const params = req.url.searchParams.get('start_date');
      console.log(req.url.toString());
      if (params) {
        return res(ctx.json(searchData));
      } else {
        return res(ctx.json(data));
      }
    })
  );

  await waitForElementToBeRemoved(() => screen.getByText(/loading../i));

  const startDateBox = await screen.findByLabelText(/start date:/i);
  const endDateBox = screen.getByLabelText(/end date:/i);
  const button = screen.getByRole('button');

  fireEvent.change(startDateBox, { target: { value: '2021-01-01' } });
  fireEvent.change(endDateBox, { target: { value: '2021-01-03' } });

  userEvent.click(button);

  await waitForElementToBeRemoved(() => screen.getByText(/loading../i));

  const listOfPictures = screen.getByRole('list');

  expect(listOfPictures.children.length).toEqual(3);
});

test('making sure the a fireEvent is wokring properly', async () => {
  render(<App />);

  await waitForElementToBeRemoved(() => screen.getByText(/loading../i));

  const startDateBox = screen.getByLabelText(/start date:/i);
  const endDateBox = screen.getByLabelText(/end date:/i);

  fireEvent.click(startDateBox, { target: { defaultValue: '2020-05-24' } });
  fireEvent.click(endDateBox, { target: { defaultValue: '2020-05-25' } });

  expect(startDateBox).toHaveDisplayValue('2020-05-24');
  expect(endDateBox).toHaveDisplayValue('2020-05-25');
});
