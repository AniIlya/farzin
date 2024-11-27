import React from "react"

import GoogleMapReact from 'google-map-react';

const MapComponent = ({ address }) => {
  const defaultProps = {
    center: {
      lat: 59.95, // Широта вашего адреса
      lng: 30.33, // Долгота вашего адреса
    },
    zoom: 11, // Масштаб карты
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_API_KEY' }} // Замените YOUR_API_KEY на ваш ключ API Google Maps
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* Маркер с вашим адресом */}
        <MarkerComponent lat={defaultProps.center.lat} lng={defaultProps.center.lng} text="Мой адрес" />
      </GoogleMapReact>
    </div>
  );
};
const MarkerComponent = ({ text }) => (
  <div style={{ color: 'red', fontWeight: 'bold' }}>
    {text}
  </div>
);

export default MapComponent;
