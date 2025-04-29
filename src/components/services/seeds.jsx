import React from "react";

export default function SeedsPage() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Seeds</h1>
      <img
        src="https://i.postimg.cc/CM6F4vw5/seed-image.jpg"
        alt="Seeds"
        className="h-72 w-auto object-cover"
      />
      <p className="mt-4 text-center">Find the best seeds for your crops.</p>
    </div>
  );
}