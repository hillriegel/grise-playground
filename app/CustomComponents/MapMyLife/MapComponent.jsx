"use client";
import L from 'leaflet';
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

// Fix for the marker icon path issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([36.25502912496106, 5.8669387195246205], 2);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapRef.current);

      const visitedLocations = [
        { coords: [3.139003, 101.686855] }, // Malaysia (Kuala Lumpur)
        { coords: [34.052235, -118.243683] }, // Santa Barbara
        { coords: [1.352083, 103.819836] }, // Singapore
        { coords: [21.028511, 105.804817] }, // Vietnam (Hanoi)
        { coords: [17.962160, 102.611633] }, // Laos
        { coords: [25.032969, 121.565414] }, // Taiwan
        { coords: [22.396428, 114.109497] }, // Hongkong
        { coords: [14.599512, 120.984222] }, // Philippines
        { coords: [21.916222, 95.955971] }, // Myanmar
        { coords: [52.3676, 4.9041] }, // Netherlands (Amsterdam)
        { coords: [3.2742325569927724, -74.80776080133876]}, //Guatape
        { coords: [20.645192741450206, -105.21795637825181]}, //Puerto Vallarta
        { coords: [38.053725753890255, -75.23107061100431]},//Acetue Island
        { coords: [29.94290336871506, -95.88021899379802]}, //Houston
        { coords: [43.686237984155945, -70.58514756205376]},//Bonnie Eagle Pond
        { coords: [42.361434967342355, -71.05887098117091]}, //Boston
        { coords: [43.069577958555264, -70.77002204535964]}, //Portsmouth
        { coords: [45.55942487354034, -122.62145135554611]}, //Portland
        { coords: [43.09611757050006, -79.06166577289463]}, //Niagara Falls
        { coords: [43.92103713331526, -103.66559489871115]}, //South Dakota
        { coords: [25.764452485035605, -80.21572844390806]}, //Miami

      ];

      const livedLocations = [
        { coords: [41.760586, -88.320068], popup: 'Aurora, Illinois: 1966 - 1980' }, // Aurora
        { coords: [41.288872, -82.217506], popup: 'Oberlin, Ohio: 1984 - 1986, 1989-1990' }, // Oberlin
        { coords: [40.712776, -74.005974], popup: 'New York City: 1987 - 1989' }, // New York City
        { coords: [13.756331, 100.501762], popup: 'Bangkok, Thailand: 1995 - 1998' }, // Bangkok
        { coords: [37.803108, -122.401260], popup: 'San Francisco, CA: 1993 - 1995' }, // Embarcadero
        { coords: [37.710079, -121.927002], popup: 'Dublin, CA: 2002 - 2012' }, // Dublin
        { coords: [37.750190, -122.451750], popup: 'San Francisco, CA: 1990 - 1993' }, // Starview Way
        { coords: [37.783530, -122.415510], popup: 'San Francisco, CA: 1998 - 2002' }, // Eddy Street
        { coords: [6.208286, -75.565413], popup: 'Medellin, Colombia: 2019 - 2020' }, // Medellin
        { coords: [37.785490, -122.174740], popup: 'Oakland, CA: 2012 - Current' }, // Oakland
        { coords: [33.73414462960178, -84.39198891962425], popup: 'Atlanta, GA: 1988'},
        { coords: [38.84295671976658, -106.15669090109347], popup: 'Bunea Vista, CO: 1980-1984' } //Atlanta
      ];

      // Add lived locations with markers and popups
      livedLocations.forEach(location => {
        const marker = L.marker(location.coords).addTo(mapRef.current)
          .bindPopup(location.popup);

        // Open popup on mouseover
        marker.on('mouseover', function () {
          marker.openPopup();
        });

        // Close popup on mouseout
        marker.on('mouseout', function () {
          marker.closePopup();
        });
      });

      // Add visited locations with circles
      visitedLocations.forEach(visit => {
        L.circle(visit.coords, {
          color: 'green',
          fillColor: 'green',
          fillOpacity: 0.5,
          radius: 108600
        }).addTo(mapRef.current);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
