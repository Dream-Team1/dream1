import React, {Component} from 'react';
import {
  withScriptjs,withGoogleMap,GoogleMap,Marker,google,maps
} from "react-google-maps";
import {compose, withProps, lifecycle} from 'recompose';
import _ from 'lodash'
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import {Grid, Row, Col,table,thead} from 'react-bootstrap';


const Main = compose(withProps({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBD2x3uoBXe8vWtIaBkvRvlrD9msa-X" +
      "hnM&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{
    height: `500%`
  }}/>,
  containerElement: <div className="mapp" style={{
    height: `450px`
  }}/>,
  mapElement: <div style={{
    height: `90%`,
    width: `60%`,
    margin: `0 auto`
    }}/>
}), lifecycle({
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
    this.setState({
      lat: location.coords.latitude,
      lon: location.coords.longitude
    })

  })
    const refs = {};
    this.setState({
      bounds: null,
      places: [],
      center: {
        lat: 19.4222496,
        lng: -99.1740582,
      },
      markers: [],
      onMapMounted: ref => {
        refs.map = ref;
      },
      onBoundsChanged: () => {
        this.setState({
          bounds: refs
            .map
            .getBounds(),
          center: refs
            .map
            .getCenter()
        })
      },
      onSearchBoxMounted: ref => {
        refs.searchBox = ref;
      },
      onPlacesChanged: () => {
        const places = refs
          .searchBox
          .getPlaces();
        const bounds = new window
          .google
          .maps
          .LatLngBounds({
            lat: 19.308451,
            lng: -99.232083
          }, {
            lat: 19.567233,
            lng: -99.016398
          });

        places.forEach(place => {
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport)
          } else {
            bounds.extend(place.geometry.location)
          }
        });
        const nextMarkers = places.map(place => ({position: place.geometry.location}));
        const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

        this.setState({center: nextCenter, markers: nextMarkers, places});
      }
    })
  }

}), withScriptjs, withGoogleMap)(props =>
    <div>
    <div className="columns">
      <div className="column">

      <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={15}
        center={props.center}
        onBoundsChanged={props.onBoundsChanged}>
        <SearchBox
          ref={props.onSearchBoxMounted}
          bounds={props.bounds}
          controlPosition={1}
          onPlacesChanged={props.onPlacesChanged}>
          <input
            type="text"
            placeholder="type name of place"
            style={{
            boxSizing: `border-box`,
            border: `3px solid transparent`,
            width: `50%`,
            height: `10%`,
            marginTop: `8px`,
            padding: `0 62px`,
            borderRadius: `31px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `16px`,
            border: `black`,
            color: `black`
          }}/>

        </SearchBox>
        {props
          .markers
          .map((marker, index) => <Marker key={index} position={marker.position}/>)}
      </GoogleMap>
      </div>
    <div className="maplist">
    <div className="column">

    <div className="block">
      <article className="message">
        <div className="message-body">

      {props
        .places
        .map(({place_id, formatted_address, rating, name}) =>
        <div className="entries" key={place_id}>
          <h4 className="entrie-name">{name}</h4>
          <p className="entrie-address">{formatted_address}</p>
          <p className="entrie-rating">
          <img src="https://i.imgur.com/8b7ptSI.png" height="20" width="20"></img>{rating}</p>
        </div>)}
    </div>
    </article>
    </div>

    </div>
    </div>
    </div>
    </div>

);

export default Main;
