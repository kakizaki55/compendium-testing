import React from 'react';
import { useState, useEffect } from 'react';
import NasaCard from '../../components/NasaCard/NasaCard';
import { getPictureBySearch, getPictureOfTheDay } from '../../services/fetchdata';
import Controls from '../../components/Controls/Controls';

export default function Home() {
  const [nasaData, setNasaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dates, setDates] = useState();
  const [tempStartDate, setTempStartDate] = useState();
  const [tempEndDate, setTempEndDate] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      if (dates) {
        const resp = await getPictureBySearch(dates);
        const data = resp;
        setNasaData(data);
      } else {
        const resp = await getPictureOfTheDay();
        const data = resp;
        setNasaData(data);
      }
      setLoading(false);
    };
    fetchdata();
  }, [dates]);

  const handleSubmit = () => {
    setLoading(true);
    setDates({ start: tempStartDate, end: tempEndDate });
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
            startDate={tempStartDate}
            endDate={tempEndDate}
            handleSubmit={handleSubmit}
            setTempStartDate={setTempStartDate}
            setTempEndDate={setTempEndDate}
          ></Controls>
          <NasaCard nasaData={nasaData}></NasaCard>
        </>
      )}
    </div>
  );
}
