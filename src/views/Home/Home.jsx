import React from 'react';
import { useState, useEffect } from 'react';
import NasaCard from '../../components/NasaCard/NasaCard';
import { getPictureBySearch, getPictureOfTheDay } from '../../services/fetchdata';
import Controls from '../../components/Controls/Controls';

export default function Home() {
  const [nasaData, setNasaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchdata = async () => {
      try {
        if (startDate && endDate) {
          const resp = await getPictureBySearch(startDate, endDate);
          const data = resp;
          setNasaData(data);
        } else {
          const resp = await getPictureOfTheDay();
          const data = resp;
          setNasaData(data);
        }
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };
    fetchdata();
  }, [startDate, endDate]);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    setStartDate(e.target[0]?.value);
    setEndDate(e.target[1]?.value);
  };

  return (
    <div>
      {loading ? (
        <>
          <div>loading..</div>
        </>
      ) : (
        <>
          <Controls startDate={startDate} endDate={endDate} handleSubmit={handleSubmit}></Controls>
          <NasaCard nasaData={nasaData}></NasaCard>
        </>
      )}
    </div>
  );
}
