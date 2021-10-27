import React from "react";
import Location from "./components/location";
import Crew from "./components/crew";
import Maps from "./components/google-map";

const styles = {
  box: {
    border: "2px solid black",
    padding: "10px",
    display: "flex",
    flexDirection: "column-reverse",
    backgroundColor: "#FFF5EE",
  },
  LocationBox: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
    border: "2px solid black",
    height: "80px",
    width: "60%",
    paddingLeft: "20px",
    borderRadius: "20px",
  },
  time_box: {
    height: "80px",
    width: "30%",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid #000",
    borderRadius: "20px",
  },
  my_box_tool: {
    border: "2px solid black",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  my_box_crew: {
    border: "2px solid black",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

class App extends React.Component {
  render() {
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();

    return (
      <div style={styles.box}>
        <div style={styles.my_box_crew}>
          <Crew />
        </div>
        <div style={styles.box}>
          <Maps />
        </div>
        <div style={styles.my_box_tool}>
          <div style={styles.time_box}>
            <ul>
              <li>Current UTC TIME: {currTime}</li>
              <li>{currDate}</li>
            </ul>
          </div>
          <div style={styles.LocationBox}>
            <Location />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
