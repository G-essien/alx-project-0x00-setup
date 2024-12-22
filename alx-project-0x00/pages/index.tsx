// const Home: React.FC = () => {
//   return (
//     <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
//       <h1>Airbnb Application Clone system</h1>
//       <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
//         Get Started
//       </button>
//     </main>
//   );
// };

// export default Home;

import React from 'react';
// import ReactDOM from 'react-dom';
import Card from '../component/Card';
import Pill from '../component/Pill';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Display the Card component */}
      <Card />

      {/* Display Pills */}
      <div className="mt-4 flex space-x-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Private Rooms" />
      </div>
    </div>
  );
};

export default Home;
