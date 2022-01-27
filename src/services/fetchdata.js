export const getPictureOfTheDay = async () => {
  const temp = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&count=3`
  );
  const response = await temp.json();
  return response;
};

export const getPictureBySearch = async (startDate, endDate) => {
  console.log('you are in the fetch call by search', process.env.REACT_APP_NASA_KEY);
  const temp = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&start_date=${startDate}&end_date=${endDate}`
  );
  const response = await temp.json();
  return response;
};
