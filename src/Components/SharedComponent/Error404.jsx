import { Truck, Package, MapPin, ArrowLeft, Home, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 text-blue-200 animate-spin"
            style={{ animationDuration: "8s" }}
          >
            <Truck size={40} />
          </div>
          <div
            className="absolute top-40 right-20 text-indigo-200 animate-spin"
            style={{ animationDuration: "6s", animationDirection: "reverse" }}
          >
            <Package size={35} />
          </div>
          <div
            className="absolute bottom-40 left-20 text-blue-300 animate-spin"
            style={{ animationDuration: "10s" }}
          >
            <MapPin size={30} />
          </div>
          <div
            className="absolute bottom-20 right-10 text-indigo-300 animate-spin"
            style={{ animationDuration: "7s", animationDirection: "reverse" }}
          >
            <Truck size={45} />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* 404 Number with Truck Icon */}
          <div className="flex items-center justify-center mb-8">
            <div className="text-8xl md:text-9xl font-bold text-blue-600 flex items-center">
              4
              <div className="mx-4 relative">
                <div
                  className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center animate-spin"
                  style={{ animationDuration: "4s" }}
                >
                  <Truck className="text-white" size={40} />
                </div>
                {/* Rotating ring around truck */}
                <div
                  className="absolute inset-0 border-4 border-blue-300 rounded-full animate-spin opacity-50"
                  style={{
                    animationDuration: "3s",
                    animationDirection: "reverse",
                  }}
                ></div>
              </div>
              4
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Your shipment got lost
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            It looks like the page you're looking for has been misrouted. Don't
            worry, our logistics team is on it! Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Home size={20} />
              Home Page
            </Link>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Phone size={20} />
              Contact Support
            </button>
          </div>

          {/* Bottom Message */}
          <p className="text-sm text-gray-500 mt-8">
            Error Code: 404 | If you continue to experience issues, please
            contact our support team
          </p>
        </div>
      </div>
    </div>
  );
};
