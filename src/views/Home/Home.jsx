import React from 'react';
import { useState, useEffect } from 'react';
import NasaCard from '../../components/NasaCard/NasaCard';
import { getPictureOfTheDay } from '../../services/fetchdata';
import Controls from '../../components/Controls/Controls';

export default function Home() {
  const [nasaData, setNasaData] = useState();
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      const resp = await getPictureOfTheDay();
      setNasaData(resp);
      setLoading(false);
    };
    fetchdata();
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <div>loading..</div>
        </>
      ) : (
        <>
          <Controls setStartDate={setStartDate} setEndDate={setEndDate}></Controls>
          <NasaCard nasaData={nasaData}></NasaCard>
        </>
      )}
    </div>
  );
}
