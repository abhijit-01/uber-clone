import React from "react";

const LocationSearchPanel = () => {
  const locations = [
    "24B, Near Kapoor's Cafe,Sheriyans Coding School , Bhopal",
    "23B, Near Singhania's Cafe,Sheriyans Coding School , Bhopal",
    "22C, Near Raichad's Cafe,Sheriyans Coding School , Bhopal",
    "18B, Near Hangout's Cafe,Sheriyans Coding School , Bhopal",
    "18B, Near Restro's Cafe,Sheriyans Coding School , Bhopal",
  ];
  return (
    <div>
      {locations.map(function (elem) {
        return (
          <div className="flex gap-4 border-2 border-gray-100 hover:border-black active:border-black my-2 items-center justify-start w-full">
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium m-2">{elem}</h4>
          </div>
        );
      })}

      <div className="fixed w-full z-10 px-3 py-6 bg-white bottom-0 translate-y-full">
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div className="flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
            alt=""
          />
          <div className=" ml-2 w-1/2">
            <h4 className="font-medium text-lg">
              Uber Go{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable , compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹193.20</h2>
        </div>

        <div className="flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png"
            alt=""
          />
          <div className=" ml-2 w-1/2">
            <h4 className="font-medium text-lg">
              Moto
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable motorcycle rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹65.20</h2>
        </div>

        <div className="flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-10"
            src="https://techpp.com/wp-content/uploads/2018/01/uber-auto-bangalore.png"
            alt=""
          />
          <div className=" ml-2 w-1/2">
            <h4 className="font-medium text-lg">
              Uber Auto
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">7 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable motorcycle rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹118.20</h2>
        </div>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
