import React from "react";
import "./App.css";

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
// components //
import PersonsTable from "./components/PersonsTable/PersonsTable";

function App() {
  return (
    <div className='App'>
      <PersonsTable />
    </div>
  );
}

export default App;
