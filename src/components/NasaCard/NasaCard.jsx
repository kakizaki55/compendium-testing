import React from 'react';
import './NasaCard.css';

export default function NasaCard({ nasaData }) {
  return (
    <ul id="nasa-list" className="nasa-list" aria-label="nasa-list">
      {nasaData.map((item) => (
        <li key={item.date} className="nasa-card">
          <img src={item.hdurl} className="picture-card" />
          <h3>Title: {item.title}</h3>
          <h5>Date: {item.date}</h5>
          <p>{item.explanation}</p>
        </li>
      ))}
    </ul>
  );
}
