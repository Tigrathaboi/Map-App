import React from "react";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  fetchResult = () => {
    fetch("http://api.open-notify.org/iss-now.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.iss_position,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  componentDidMount() {
    this.fetchResult();
    // setInterval(this.fetchResult, 5000);
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p> Error {error.message} </p>;
    } else if (!isLoaded) {
      return <p> Loading... </p>;
    } else {
      return (
        <ul>
          <li> Latitude: {items.latitude}</li>
          <li> Longitude: {items.longitude}</li>
        </ul>
      );
    }
  }
}

export default Location;
