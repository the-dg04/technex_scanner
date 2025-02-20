import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EventSelector() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/scan/${selectedValue}`);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center relative">
      <div className="text-5xl font-bold absolute top-20">Technex Scanner</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-xs mx-auto py-4 px-8 border rounded-lg shadow-lg"
      >
        <label htmlFor="event" className="w-full text-center">Select Event</label>
        <select
          title="event_selector"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          className="p-2 text-lg border rounded-md"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
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
