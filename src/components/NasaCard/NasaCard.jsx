import React from 'react';
import './NasaCard.css';

export default function NasaCard({ nasaData }) {
  return (
    <div className="nasa-list">
      {nasaData.map((item) => (
        <>
          <div className="nasa-card">
            <img key={item.id} src={item.hdurl} className="picture-card" />
            <h3>Title: {item.title}</h3>
            <h5>Date: {item.date}</h5>
            <p>{item.explanation}</p>
          </div>
        </>
      ))}
    </div>
  );
}
