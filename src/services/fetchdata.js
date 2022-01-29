export const getPictureOfTheDay = async () => {
  const temp = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&count=4`
  );
  const response = await temp.json();
  return response;
};

export const getPictureBySearch = async (dates) => {
  // console.log(dates); this console gets the correct information but in my test enviroment it comes out undefined cant seem to figure out why
  const temp = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&start_date=${dates.start}&end_date=${dates.end}`
  );

  const response = await temp.json();

  return response;
};
