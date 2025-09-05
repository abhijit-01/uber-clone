import React from "react";
import { Link } from "react-router-dom"; // removed unused useLocation/useContext

const Riding = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Home button */}
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>

      {/* Uber logo */}
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber logo"
      />

      {/* Background GIF */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Ride background"
        />
      </div>

      {/* Bottom details panel */}
      <div className="absolute bottom-0 h-1/2 w-full bg-white p-4 rounded-t-2xl shadow-xl">
        {/* Driver info */}
        <div className="flex items-center justify-between">
          <img
            className="h-12 rounded"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt="Driver car"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium capitalize">Name</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">Number</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        {/* Ride details */}
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Destination</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹Fare</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        {/* Payment button */}
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
