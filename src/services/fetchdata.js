export const getPictureOfTheDay = async () => {
  const temp = await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=i5NuvqeVjqnYyeBxzRJmWkgHl9KtHRnM3K8t6uVc&count=20&'
  );
  const response = temp.json();
  return response;
};

export const getPictureBySearch = async (input) => {
  const temp = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=i5NuvqeVjqnYyeBxzRJmWkgHl9KtHRnM3K8t6uVc&${input}`
  );
  const response = temp.json();
  return response;
};
