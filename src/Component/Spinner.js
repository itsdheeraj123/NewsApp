import React, { Component } from "react";
import load from "./load.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={load} alt="loading" />
      </div>
    );
  }
}

export default Spinner;
// <Route path="/sports"><News pageSize={5} country="in" category="sports" /></Route>
// <Route path="/sports"><News pageSize={5} country="in" category="health" /></Route>
// <Route path="/science"><News pageSize={5} country="in" category="science" /></Route>
// <Route path="/entertainment"><News pageSize={5} country="in" category="entertainment"/></Route>
// <Route path="/sports"><News pageSize={5} country="in" category="" /></Route>
