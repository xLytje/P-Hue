import React, { useState } from "react";
import axios from "axios";

function LightOnOff() {
  const [isOn, setIsOn] = useState(true);

  const options = {
    method: "PUT",
    url: "http://192.168.8.100/api/dhe6ind3MTGqt6TKDOJh6bkbTQRcuhF1NwbrPgY4/lights/32/state",
    headers: { "Content-Type": "application/json" },
    data: { on: isOn },
  };

  const toggleLight = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setIsOn(!isOn);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={toggleLight}
      className="absolute top-[215px] right-8 bg-white shadow-none"
    >
      {isOn ? "🌑" : "🌞"}
    </button>
  );
}

export default LightOnOff;
