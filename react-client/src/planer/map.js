import React, { Component } from 'react';
import { Marker,withGoogleMap, GoogleMap } from 'react-google-maps';



class Map extends Component {
    constructor (props){
     super(props);
     this.state = {
       lat: null,
       lon: null,

     }
   }

    componentDidMount() {
       navigator.geolocation.getCurrentPosition(location => {
       this.setState({
         lat: location.coords.latitude,
         lon: location.coords.longitude
       })
       this.getEvent();
     });
  }
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 19.4222496, lng: -99.1740635 } }
        defaultZoom = { 15 }


      >
      <Marker
     title={'Here you are'}
     position={{ lat: 19.4222496, lng: -99.1740635 }}
    
     />
      </GoogleMap>

   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          loadingElement={<div style={{ height: `100%` }} />}
        />

      </div>
   );
   }
};
export default Map;
