import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "seeds",
    title: "Seeds",
    image: "https://i.postimg.cc/CM6F4vw5/seed-image.jpg",
  },
  {
    id: "seedlings",
    title: "Seedlings",
    image: "https://i.postimg.cc/CLZZ6sh8/seedinng-image.jpg",
  },
  {
    id: "machinery",
    title: "Machinery",
    image: "https://i.postimg.cc/DzD9XNr3/045b108de5a527b4649f226d878b8257.jpg",
  },
  {
    id: "hire-worker",
    title: "Hire Worker",
    image: "https://i.postimg.cc/RZYssHNc/workers.jpg",
  },
  {
    id: "cultivation-process",
    title: "Cultivation Process",
    image: "https://i.postimg.cc/K8mk6qgb/cultivation.jpg",
  },
  {
    id: "cropdisease",
    title: "Crop Disease Solution",
    image: "https://i.postimg.cc/FH2tfqg5/crop.jpg",
  },
];

export default function Krishigyan() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow">
        <button aria-label="Open menu">
          <span className="text-2xl">☰</span>
        </button>
        <h1 className="text-xl font-bold">Services</h1>
        <div className="relative">
          <button className="text-green-500" aria-label="Notifications">
            🔔
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>

      {/* Grid of Service Cards */}
      <div className="grid grid-cols-3 gap-4 p-8 h-full">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`} // ✅ Correct route path
            className="rounded-lg overflow-hidden border bg-white shadow hover:scale-[1.02] transition-transform"
          >
            <div className="h-60 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 text-center font-semibold text-sm">
              {service.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
