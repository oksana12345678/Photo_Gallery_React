import { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MorePhotos from "./pages/MorePhotos/MorePhotos";
import Loader from "./components/Loader/Loader";
import HomePage from "./pages/Home/HomePage";

export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/more-photos"
            element={<MorePhotos onLoad={setLoading} />}
          />
        </Routes>
      </Suspense>
    </>
  );
}
