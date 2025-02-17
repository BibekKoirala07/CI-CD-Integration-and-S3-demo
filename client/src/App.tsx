import React, { useEffect, useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ImageGallery from "./components/ImageGallery";
import "./App.css";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [hasRefreshed, setHasRefreshed] = useState(false);

  useEffect(() => {
    if (!hasRefreshed) {
      setTimeout(() => {
        setHasRefreshed(true);
        window.location.reload();
      }, 3000);
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
        <h1 className="text-3xl font-bold mb-6">S3 Image Manager</h1>
        <ImageUploader />
        <ImageGallery />
      </div>
    </div>
  );
};

export default App;
