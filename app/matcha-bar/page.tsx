import React from 'react';

export default function MatchaBarPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-[#f8f7f5]">
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Our Matcha Bar
          </h1>
          <p className="text-charcoal/80 text-lg mb-8">
            Relax and refuel before or after your class with our curated selection of premium matcha beverages and healthy snacks.
          </p>
          {/* Add more content here - menu items, images, etc. */}
          <div className="bg-cream p-8 rounded-lg shadow-sm mt-12">
            <h2 className="text-2xl font-medium mb-4">Coming Soon!</h2>
            <p className="text-charcoal/70">
              Our full matcha bar menu and details will be available here shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 