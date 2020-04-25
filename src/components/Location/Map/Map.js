import React, { useState } from 'react';
import './style.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import latlongData from './../../../data/data';

const Info = (props) => {
  return <div style={{ width: '200px', minHeight: '100px' }} className="marker-container">
    <div style={{ textAlign: 'left', zIndex: 1000 }}>
      <p><b>{props.info.name}</b> : This shop is less crowded hence you can available ease of shopping here. For more options, please search in the bar provided.  </p>
      <p><b>Distance :</b> {props.info.distance} </p>
    </div>
  </div>;
}

const Map = (props) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  return <GoogleMap
    defaultZoom={17}
    defaultCenter={{
      lat: props.lat ? props.lat : latlongData.information[0].lat,
      lng: props.lng ? props.lng : latlongData.information[0].lng
    }}
  >
    {latlongData.information.map(
      (latlong, index) => {
        return (
          <Marker
            key={index}
            position={{
              lat: latlong.lat,
              lng: latlong.lng
            }}
            onClick={() => {
              setSelectedMarker(latlong);
            }}
            icon={{
              url: `./map-marker.png`,
              scaledSize: new window.google.maps.Size(45, 45)
            }}
          />
        );
      }
    )}

    {selectedMarker && (
      <InfoWindow
        position={{
          lat: selectedMarker.lat,
          lng: selectedMarker.lng
        }}
        onCloseClick={() => {
          setSelectedMarker(null);
        }}
      >
        <Info info={selectedMarker} />
      </InfoWindow>
    )}
  </GoogleMap>;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GMap = props => {
  const googleMapApiKey = process.env.REACT_APP_GMAP_KEY || process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  return (
    <div className="App">
      <WrappedMap {...props}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleMapApiKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `350px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default GMap;
