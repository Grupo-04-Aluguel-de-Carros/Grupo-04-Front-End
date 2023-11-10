// src/LocationBlock.js
import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const LocationBlock = () => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          showMap(latitude, longitude);
        },
        function (error) {
          console.error("Erro ao obter a localização: " + error.message);
        }
      );
    } else {
      alert("Seu navegador não suporta geolocalização.");
    }

    function showMap(latitude, longitude) {
      const mapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 15
      };

      const map = new window.google.maps.Map(document.getElementById("map"), mapOptions);

      const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: "Sua localização"
      });
    }
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <h1>Minha Localização</h1>
      <LoadScript
        googleMapsApiKey="AIzaSyBpjbArL82xLUlnNNUwMCYJoDJmVISyHHQ"
      >
        <GoogleMap
          mapContainerStyle={{ height: '400px', width: '100%' }}
          center={{ lat: 0, lng: 0 }}
          zoom={2}
        >
          <Marker position={{ lat: 0, lng: 0 }} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default LocationBlock;

