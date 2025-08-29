import { useState, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MorePhotos from "./pages/MorePhotos/MorePhotos";
import Loader from "./components/Loader/Loader";
import HomePage from "./pages/Home/HomePage";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getAllBooking, getFreeBookingDate } from "./redux/booking/operations";

export default function App() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooking());
    dispatch(getFreeBookingDate());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <ToastContainer />

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
