import React from "react";
import "./App.css";
import CollectionsGrid from "./sections/collections-grid/CollectionsGrid";
import gridData from "./sections/collections-grid/collections.json";

const App = () => {
  return <CollectionsGrid gridData={gridData} />;
};

export default App;
