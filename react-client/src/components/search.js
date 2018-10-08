import React, {Component} from 'react';
import {
  withScriptjs,withGoogleMap,GoogleMap,Marker,google,maps
} from "react-google-maps";
import {compose, withProps, lifecycle} from 'recompose';
import _ from 'lodash'
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import TableList from "./search/resultList.js";
import {Grid, Row, Col} from 'react-bootstrap';


const Main = compose(withProps({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBD2x3uoBXe8vWtIaBkvRvlrD9msa-X" +
      "hnM&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{
    height: `200%`
  }}/>,
  containerElement: <div style={{
    height: `600px`
  }}/>,
  mapElement: <div style={{
      height: `90%`,
      width: `80%`,
      margin: `0 auto`
    }}/>
}), lifecycle({
  componentWillMount() {
    const refs = {};

    this.setState({
      bounds: null,
      places: [],
      center: {
        lat: 19.39776549999999,
        lng: -99.1713954,

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
}), withScriptjs, withGoogleMap)(props => <Grid>
  <Row className="show-grid">
    <Col md={6} mdPush={6}>
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
            placeholder="type the service or store that you are looking for"
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
            
            textOverflow: `ellipses`,
            color: `#f87800`
          }}/>
        </SearchBox>
        {props
          .markers
          .map((marker, index) => <Marker key={index} position={marker.position}/>)}
      </GoogleMap>
    </Col>
    <Col md={6} mdPull={6}>
      {props
        .places
        .map(({place_id, formatted_address, rating, name}) =>
        <div className="entries" key={place_id}>
          <h4 className="entrie-name">{name}</h4>
          <p className="entrie-address">{formatted_address}</p>
          <p className="entrie-rating">Rating:{rating}</p>
        </div>)}
    </Col>
  </Row>
</Grid>);

export default Main;
