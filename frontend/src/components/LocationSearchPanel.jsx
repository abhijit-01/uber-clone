import React from "react";

const LocationSearchPanel = ({ setVehiclePanel, setPanelOpen }) => {
  const locations = [
    "24B, Near Kapoor's Cafe,Sheriyans Coding School , Bhopal",
    "23B, Near Singhania's Cafe,Sheriyans Coding School , Bhopal",
    "22C, Near Raichad's Cafe,Sheriyans Coding School , Bhopal",
    "18B, Near Hangout's Cafe,Sheriyans Coding School , Bhopal",
    "14B, Near Restro's Cafe,Sheriyans Coding School , Bhopal",
  ];
  return (
    <div>
      {locations.map(function (elem,idx) {
        return (
          <div
          key={idx}
            onClick={() => {
              setVehiclePanel(true);
              setPanelOpen(false);
            }}
            className="flex gap-4 border-2 border-gray-100 hover:border-black active:border-black my-2 items-center justify-start w-full"
          >
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium m-2">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
