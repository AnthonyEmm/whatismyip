import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

export default function UserCountry({ countryCode }) {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((response) => {
        console.log(response.data[0]);
        setCountry(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {!country ? (
        <p>Loading...</p>
      ) : (
        <h2>
          Your current location is : {country?.name.common} {""}
          <img src={country.flags.png} alt="your country!" />
        </h2>
      )}
    </>
  );
}
