// import React from "react";
// import { useParams } from "react-router-dom";

// // Import all your service pages
// import Seeds from "./services/seeds";
// import Seedlings from "./services/seedlings";
// import Machinery from "./services/Machinery";
// import HireWorker from "./services/hire-worker";
// import CultivationProcess from "./services/cultivation-process";
// import CropDiseaseSolution from "./services/cropdisease";

// // Map the URL service IDs to components
// const componentsMap = {
//   "seeds": Seeds,
//   "seedlings": Seedlings,
//   "machinery": Machinery,
//   "hire-worker": HireWorker,
//   "cultivation-process": CultivationProcess,
//   "cropdisease": CropDiseaseSolution,
// };

// export default function ServiceDetailPage() {
//   const { serviceId } = useParams();

//   // 🪵 Debug logs
//   console.log("serviceId from URL:", serviceId);
//   console.log("Available keys in componentsMap:", Object.keys(componentsMap));
//   console.log("Resolved Component:", componentsMap[serviceId]);

//   const Component = componentsMap[serviceId];

//   if (!Component) {
//     return <div className="p-4 text-red-600">Service not found</div>;
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4 capitalize">{serviceId.replace(/-/g, " ")}</h2>
//       <Component />
//     </div>
//   );
// }