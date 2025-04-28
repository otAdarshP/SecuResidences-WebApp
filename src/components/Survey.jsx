// pages/Survey.jsx
// import React from 'react';

// const Survey = () => {
//   return (
//     <div className="p-6 text-center">
//       <h1 className="mb-4 text-3xl font-bold text-purple-700">Give Us Your Feedback</h1>
//       <iframe
//         src="https://docs.google.com/forms/d/e/1FAIpQLSe9MSrK0oD4RVjfHdUajXWiuIDXdbgC6XeSnBgqMeDNVn-HKw/viewform?usp=dialog "
//         width="100%"
//         height="700"
//         title="Survey Form"
//         className="border rounded-xl"
//       ></iframe>
//     </div>
//   );
// };

// export default Survey;
import React, { useState } from "react";
// import Contact from "./Contact";


const Survey = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen px-6 py-16 text-center bg-white">
      <h1 className="mb-4 text-3xl font-bold">We Value Your Opinion</h1>

      {!loaded && (
        <div className="flex justify-center items-center h-[600px]">
          <div className="w-16 h-16 border-t-4 border-purple-600 border-opacity-50 rounded-full animate-spin"></div>
        </div>
      )}

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe9MSrK0oD4RVjfHdUajXWiuIDXdbgC6XeSnBgqMeDNVn-HKw/viewform?usp=dialog"
        width="100%"
        height="600"
        // frameBorder="0"
        className={`rounded-xl border ${loaded ? "block" : "hidden"}`}
        title="Survey Form"
        onLoad={() => setLoaded(true)}
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Survey;
