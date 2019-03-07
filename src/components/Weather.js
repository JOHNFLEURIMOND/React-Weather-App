import React from 'react';

const Weather = props => (
  <div className='g'>
    <div className='g--8 m-b300'>
      {props.city && props.country && (
        <p className='cd-t'>
          {' '}
          Location:
          <span className='cd-t'>
            {' '}
            {props.city}, {props.country}
          </span>
        </p>
      )}
      {props.temperature && (
        <p className='cd-t'>
          {' '}
          Temperature:
          <span className='cd-t'> {props.temperature} </span>
        </p>
      )}
      {props.humidity && (
        <p className='cd-t'>
          {' '}
          Humidity:
          <span className='cd-t'> {props.humidity} </span>
        </p>
      )}
      {props.description && (
        <p className='cd-t'>
          {' '}
          Conditions:
          <span className='cd-t'> {props.description} </span>
        </p>
      )}
      {props.error && <p className='cd-t'>{props.error}</p>}
    </div>
  </div>
);

export default Weather;
