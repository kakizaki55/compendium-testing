import React from 'react';
import './Controls.css';

export default function Controls({
  tempStartDate,
  tempEndDate,
  handleSubmit,
  setTempStartDate,
  setTempEndDate,
}) {
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
            <input
              defaultValue={tempStartDate}
              type="date"
              min="2010-01-01"
              max="2021-12-31"
              onChange={(e) => {
                setTempStartDate(e.target.value);
              }}
            ></input>
          </label>
          <label>
            <span>end date:</span>
            <input
              defaultValue={tempEndDate}
              type="date"
              min="2010-01-01"
              max="2021-12-31"
              onChange={(e) => {
                setTempEndDate(e.target.value);
              }}
            ></input>
          </label>
        </form>
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Search
        </button>
      </div>
    </>
  );
}
