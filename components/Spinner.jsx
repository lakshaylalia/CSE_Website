"use client";
const Spinner = () => {
    return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-700">
        <div className="loader"></div>
        <style jsx>{`
          .loader {
            border: 8px solid rgba(255, 255, 255, 0.3);
            border-top: 8px solid rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 1s linear infinite;
          }
  
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  };
  
  export default Spinner;
  