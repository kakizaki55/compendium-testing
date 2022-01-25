import React from 'react';
import { useState, useEffect } from 'react';
import NasaCard from '../../components/NasaCard/NasaCard';

export default function Home() {
  const [nasaData, setNasaData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://api.nasa.gov/planetary/apod?api_key=i5NuvqeVjqnYyeBxzRJmWkgHl9KtHRnM3K8t6uVc&count=20'
      );
      const temp = await data.json();
      setNasaData(temp);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <div>loading..</div>
        </>
      ) : (
        <NasaCard nasaData={nasaData}></NasaCard>
      )}
    </div>
  );
}
