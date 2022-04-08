import React from "react";
import Anagram from "./Anagram";
import { useEffect, useState } from "react";
import database from "../firebase/firebase";

const App = () => {
  const [fetchedData, setfetchedData] = useState([]);

  // fetching the data from database as soon as component mounts
  useEffect(() => {
    database
      .ref()
      .once("value")
      .then((snapshot) => {
        const dataFetched = snapshot.val();

        setfetchedData(dataFetched);
      })
      .catch((e) => {
        console.log("there is an error!", e);
      });
  }, []);

  // sorting array

  return <Anagram data={fetchedData} />;
};

export default App;
