import React from 'react';

function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="flex-1 bg-gray-100 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
          <p className="text-lg text-gray-700 mb-6">A place to showcase my work and projects.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Get Started</button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Feature 1</h4>
              <p className="text-gray-600">Description of feature 1.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Feature 2</h4>
              <p className="text-gray-600">Description of feature 2.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Feature 3</h4>
              <p className="text-gray-600">Description of feature 3.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Homepage;
