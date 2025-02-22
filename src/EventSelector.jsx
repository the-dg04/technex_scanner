import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EventSelector() {
  const [selectedValue, setSelectedValue] = useState("DroneTech");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/scan/${selectedValue}`);
  };

  const options = [
    "DroneTech",
    "AeroVerse",
    "SkyGlide",
    "International Coding Marathon",
    "Capture the Flag",
    "Hack it out",
    "1 Billion row challenge",
    "Axelerate",
    "Cadastrophe",
    "Robo Soccer",
    "SIMUSOLVE CHALLENGE",
    "Fake investors",
    "Climate buzzer",
    "Eureka",
    "Eco hackathon",
    "AlgoZen",
    "CogniQuest",
    "Pokermania",
    "CryptoRush",
    "IOmatic",
    "Soft-corner",
    "Terravate",
    "Consultathon",
    "Prodonosis",
    "Technalatics",
    "Capital Quest",
    "Robowars",
    "Micromouse",
    "Botstacle Challenge",
    "Mazex",
    "Scientists of Utopia",
    "Solid-Boost",
    "Stellar Analytics",
    "Astro-Quiz",
  ];

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center relative">
      <div className="text-5xl font-bold absolute top-20">Technex Scanner</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-xs mx-auto py-4 px-8 border rounded-lg shadow-lg"
      >
        <label htmlFor="event" className="w-full text-center">
          Select Event
        </label>
        <select
          title="event_selector"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          className="p-2 text-lg border rounded-md"
        >
          {options.map((val, i) => (
            <option key={i} value={val}>
              {val}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="p-2 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Scan
        </button>
      </form>
    </div>
  );
}
