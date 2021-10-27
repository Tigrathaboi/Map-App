import React from "react";

const styles = {
  astonavts: {
    border: "1px solid black",
    borderRadius: "20px",
    marginBottom: "2px",
    marginRight: "15px",
    width: "100%",
    paddingLeft: "10px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pageBreakInside: "avoid",
  },
  people_box: {
    width: "100%",
    height: "100%",
    padding: "1px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  TotalAmount: {
    border: "1px solid black",
    borderRadius: "20px",
    display: "flex",
    width: "39%",
    height: "50px",
    border: "2px solid black",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "15px",
  },
  List: {
    width: "100%",
    height: "300px",
    display: "flex",
    flexDirection: "column",
  },
  Column: {
    width: "29%",
    columnCount: 2,
  },
};

class Crew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  fetchResult = () => {
    fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.people,
            number: result.number,
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
    setInterval(this.fetchResult, 5000);
    this.fetchResult();
  }

  render() {
    const { error, isLoaded, items, number } = this.state;
    if (error) {
      return <p> Error {error.message} </p>;
    } else if (!isLoaded) {
      return <p> Loading... </p>;
    } else {
      return (
        <div style={styles.people_box}>
          <div style={styles.Column}>
            <div style={styles.List}>
              {items.map((item) => (
                <div key={item.name} style={styles.astonavts}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <p style={styles.TotalAmount}>Crew of {number} astonauts</p>
        </div>
      );
    }
  }
}

export default Crew;
