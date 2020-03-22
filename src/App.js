import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import BookingStepForm from "./components/BookingStepForm/BookingStepForm";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" component={BookingStepForm} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
