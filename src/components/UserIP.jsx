import axios from "axios";
import { useEffect, useState } from "react";
import Map from "./Map";
import UserCountry from "./UserCountry";

function UserIP() {
  const [ip, setIp] = useState("");
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_9Xawcjq0FLqO5sg2FbkfxmySXhAeY&ipAddress=`,
      )
      .then(({ data }) => {
        setIp(data.ip);
        setCountryCode(data.location.country);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="hero">
        <h1>What is your IP Address and Location?</h1>
        <h2>Your IP address is: {ip}</h2>
        {countryCode && <UserCountry countryCode={countryCode} />}
      </div>
      <div id="map">
        <h2>Map Location</h2>
        <Map position={[48.8414, 12.9572]} />
      </div>
    </>
  );
}

export default UserIP;
