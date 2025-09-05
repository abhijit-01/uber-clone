import React from "react";

const VehiclePanel = ({ setConfirmRidePanel, setVehiclePanel }) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          setVehiclePanel(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehiclePanel(false);
        }}
        className="flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      >
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

      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehiclePanel(false);
        }}
        className="flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      >
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

      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehiclePanel(false);
        }}
        className="flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      >
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
  );
};

export default VehiclePanel;
