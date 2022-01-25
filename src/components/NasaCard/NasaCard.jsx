import React from 'react';

export default function NasaCard({ nasaData }) {
  console.log(nasaData);
  return (
    <div>
      {nasaData.map((item) => (
        <img key={item.id} src={item.hdurl} />
      ))}
    </div>
  );
}
