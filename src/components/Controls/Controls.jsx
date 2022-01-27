import React from 'react';
import './Controls.css';

export default function Controls({ handleSubmit }) {
  return (
    <>
      <div className="control-card">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>
            <span>start date:</span>
            <input type="date" min="2010-01-01" max="2021-12-31"></input>
          </label>
          <label>
            <span>end date:</span>
            <input type="date" min="2010-01-01" max="2021-12-31"></input>
          </label>
          <button>Search</button>
        </form>
      </div>
    </>
  );
}
