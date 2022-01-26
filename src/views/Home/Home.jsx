import React from 'react';
import { useState, useEffect } from 'react';
import NasaCard from '../../components/NasaCard/NasaCard';
import { getPictureBySearch, getPictureOfTheDay } from '../../services/fetchdata';
import Controls from '../../components/Controls/Controls';

export default function Home() {
  const [nasaData, setNasaData] = useState();
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      let data;
      if (startDate && endDate) {
        const resp = await getPictureBySearch(startDate, endDate);
        data = resp;
      } else {
        const resp = await getPictureOfTheDay();
        data = resp;
      }
      setNasaData(data);
      setLoading(false);
    };
    fetchdata();
  }, [startDate, endDate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStartDate(e.target[0].value);
    setEndDate(e.target[1].value);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <>
          <div>loading..</div>
        </>
      ) : (
        <>
          <Controls
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            handleSubmit={handleSubmit}
          ></Controls>
          <NasaCard nasaData={nasaData}></NasaCard>
        </>
      )}
    </div>
  );
}
