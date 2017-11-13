import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { compose, withProps } from 'recompose';

const DotPrintMap = compose(
    withProps({
      googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDqvrAue-FeUXXiuwtCm1M2Wgcri1YnHVs',
      loadingElement: <div style={{ height: '100%' }} />,
      containerElement: <div style={{ height: '400px' }} />,
      mapElement: <div style={{ height: '100%' }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    (<GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 13.732499, lng: 100.52187800000002 }}
    >
      {props.isMarkerShown && <Marker defaultPlace={{ placeId: 'ChIJse6r0teY4jARf5RskjYIw2E', location: { lat: 13.732499, lng: 100.52187800000002 } }} />}
    </GoogleMap>)
  );

export default DotPrintMap;
