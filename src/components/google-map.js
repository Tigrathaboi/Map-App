import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const styles = {
  map: {
    height: "100%",
    width: 100,
  },
};

class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  fetchResult = () => {
    fetch("http://api.open-notify.org/iss-now.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.iss_position,
        });
      });
  };

  componentDidMount() {
    this.fetchResult();
    // setInterval(this.fetchResult, 5000);
  }

  render() {
    const { items } = this.state;

    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{
            lat: Number(items.latitude),
            lng: Number(items.longitude),
          }}
        >
          <Marker
            position={{
              lat: Number(items.latitude),
              lng: Number(items.longitude),
            }}
          />
        </GoogleMap>
      ))
    );

    return (
      <MapWithAMarker
        style={styles.map}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA33yQhHJy9ogCYvkfa5H3tmofvW_Kn57Q&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Maps;
