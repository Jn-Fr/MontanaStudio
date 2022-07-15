import React from 'react'
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from 'react-google-maps';

const Map = () => {
  return (
    <>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -0.2026791, lng: -78.4998071 }}
      >
        {<Marker position={{ lat: -0.2026791, lng: -78.4998071 }} />}
      </GoogleMap>
    </>
  );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
