import axios from "axios";
import { useState } from "react";

function LightSlider() {
  const [brightness, setBrightness] = useState(0);

  const changeBrightness = async (event) => {
    const options = {
      method: "PUT",
      url: "http://192.168.8.100/api/dhe6ind3MTGqt6TKDOJh6bkbTQRcuhF1NwbrPgY4/lights/32/state",
      headers: { "Content-Type": "application/json" },
      data: { bri: parseInt(event.target.value) },
    };

    try {
      setBrightness(event.target.value);
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <input
      type="range"
      min="0"
      max="254"
      value={brightness}
      onChange={changeBrightness}
      className="w-3/5 h-0.5 bg-[#FFD239] rounded-lg appearance-none accent-white "
    />
  );
}

export default LightSlider;
